import "../styles/fonts.css";

import { ApolloProvider } from "@apollo/client";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import * as Toast from "@radix-ui/react-toast";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { ColorModeToggle } from "../components";
import { useApollo } from "../src/utils/apolloClient";
import GlobalStyles from "../styles/GlobalStyles";

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cache}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <GlobalStyles />
          <div tw="relative">
            <ColorModeToggle />
          </div>
          <Toast.Provider swipeDirection="right">
            <Component {...pageProps} />
          </Toast.Provider>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default NextApp;
