import "../styles/fonts.css";

import { ApolloProvider } from "@apollo/client";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import * as Toast from "@radix-ui/react-toast";
import { Provider as JotaiProvider } from "jotai";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

// import { ColorModeToggle } from "../components";
import GlobalStyles from "../styles/GlobalStyles";
import { useApollo } from "../utils/apolloClient";

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  return (
    <JotaiProvider>
      <ApolloProvider client={client}>
        <CacheProvider value={cache}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <GlobalStyles />
            {/* <div tw="relative">
              <div tw="fixed top-8 right-8 z-10">
                <ColorModeToggle />
              </div>
            </div> */}
            <Toast.Provider swipeDirection="right">
              <Component {...pageProps} />
            </Toast.Provider>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </JotaiProvider>
  );
};

export default NextApp;
