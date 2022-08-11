import "../styles/fonts.css";

import { ApolloProvider } from "@apollo/client";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import * as Toast from "@radix-ui/react-toast";
import * as Tooltip from "@radix-ui/react-tooltip";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { AppHook, UserProvider } from "src/components";

import GlobalStyles from "../styles/GlobalStyles";
import { useApollo } from "../utils/apolloClient";

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cache}>
        <ThemeProvider attribute="class">
          <GlobalStyles />
          <Toast.Provider swipeDirection="right">
            <Tooltip.Provider delayDuration={300}>
              <UserProvider>
                <AppHook>
                  <Component {...pageProps} />
                </AppHook>
              </UserProvider>
            </Tooltip.Provider>
          </Toast.Provider>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default NextApp;
