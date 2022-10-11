import {
  ApolloClient,
  ApolloContextValue,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import DebounceLink from "apollo-client-link-debounce-test";
import QueueLink from "apollo-link-queue";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import type { AppProps } from "next/app";
import { useMemo } from "react";

import { getLocalItem } from "./localStorage";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let accessToken = "public";
let apolloClient: ApolloClient<NormalizedCacheObject>;

// Apollo `link` for when client (user) is offline.
const offlineLink = new QueueLink();

const createApolloClient = () => {
  const cache = new InMemoryCache();

  // remove cached token on 401 from the server
  const errorLink = onError(({ networkError }) => {
    console.error(networkError);
  });

  const authLink = setContext(async (_, { headers }) => {
    const cachedToken = getLocalItem("hasura-token");
    if (cachedToken) {
      accessToken = cachedToken;
    } else {
      return headers;
    }

    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });

  const ssrMode = typeof window === "undefined";

  const retryLink = new RetryLink({
    attempts: {
      max: 100,
    },
  });

  const httpLink = new HttpLink({
    uri: ssrMode
      ? process.env.NEXT_PUBLIC_HASURA_GRAPHQL_DOCKER_URL
      : process.env.NEXT_PUBLIC_HASURA_GRAPHQL_HTTPS_URL,
  });

  // TODO comment when offline mutation functionality is removed.
  let dataLink;
  if (ssrMode) {
    dataLink = httpLink;
  } else {
    // Disable localStorage caching until we have a better caching strategy
    // if (window.localStorage) {
    //   persistCache({
    //     cache,
    //     storage: new LocalStorageWrapper(window.localStorage),
    //     debug: true,
    //   });
    // }

    const webSocketLink = new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WSS_URL as string,
      options: {
        lazy: true,
        reconnect: true,
        connectionParams: async () => ({
          headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        }),
      },
    });

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      webSocketLink,
      httpLink,
    );

    dataLink = splitLink;
  }

  const debounceLink = new DebounceLink(150);

  const apolloLink = from([
    errorLink,
    authLink,
    debounceLink,
    retryLink,
    offlineLink,
    dataLink,
  ]);

  return new ApolloClient({
    ssrMode,
    link: apolloLink,
    cache,
    connectToDevTools: process.env.NEXT_PUBLIC_ENV === "development",
  });
};

const getApolloClient = (
  ctx?: ApolloContextValue,
  initialState = null,
): ApolloClient<NormalizedCacheObject> => {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return createApolloClient();

  const _apolloClient = apolloClient ?? createApolloClient();

  // If a page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s)),
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

const useApollo = (
  pageProps: AppProps["pageProps"],
): ApolloClient<NormalizedCacheObject> => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => getApolloClient({}, state), [state]);
  return store;
};

export { getApolloClient, offlineLink, useApollo };
