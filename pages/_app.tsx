import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Fragment } from "react";

import type { Page } from "../src/types/page.d";
import { useApollo } from "../src/utils/apolloClient";

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

const NextApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const client = useApollo(pageProps);
  // Use the layout defined at the page level, if available
  // See: https://nextjs.org/docs/basic-features/layouts#per-page-layouts
  // TS fix: https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5
  const getLayout = Component.getLayout ?? ((page: Page) => page);
  const Layout = Component.layout ?? Fragment;

  if (typeof client === "undefined") {
    return <Layout>{getLayout(<Component>Loading…</Component>)}</Layout>;
  }

  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
};

export default NextApp;
