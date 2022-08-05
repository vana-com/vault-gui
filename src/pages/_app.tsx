import "../styles/fonts.css";

import { ApolloProvider } from "@apollo/client";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import * as Toast from "@radix-ui/react-toast";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { AppHook } from "src/components";
import { UserProvider } from "src/components/UserAccess/UserContext";

import GlobalStyles from "../styles/GlobalStyles";
import { useApollo } from "../utils/apolloClient";

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cache}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <GlobalStyles />
          {/* <div tw="relative">
              <div tw="fixed top-8 right-8 z-10">
                <ColorModeToggle />
              </div>
            </div> */}
          <UserProvider>
            <Toast.Provider swipeDirection="right">
              <AppHook>
                <Component {...pageProps} />
              </AppHook>
            </Toast.Provider>
          </UserProvider>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default NextApp;
