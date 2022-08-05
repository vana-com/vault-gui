import "../styles/fonts.css";

import { ApolloProvider } from "@apollo/client";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import * as Toast from "@radix-ui/react-toast";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Provider as JotaiProvider } from "jotai";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { AppHook } from "src/components";

import GlobalStyles from "../styles/GlobalStyles";
import { useApollo } from "../utils/apolloClient";

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  return (
    <JotaiProvider>
      <ApolloProvider client={client}>
        <CacheProvider value={cache}>
          <ThemeProvider attribute="class">
            <GlobalStyles />
            {/* <div tw="relative">
              <div tw="fixed top-8 right-8 z-10">
                <ColorModeToggle />
              </div>
            </div> */}
            <Toast.Provider swipeDirection="right">
              <Tooltip.Provider delayDuration={300}>
                <AppHook>
                  <Component {...pageProps} />
                </AppHook>
              </Tooltip.Provider>
            </Toast.Provider>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </JotaiProvider>
  );
};

export default NextApp;
