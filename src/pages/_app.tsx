import "../styles/fonts.css";

import { ApolloProvider } from "@apollo/client";
import { datadogRum } from "@datadog/browser-rum";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import * as Toast from "@radix-ui/react-toast";
import * as Tooltip from "@radix-ui/react-tooltip";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  AppHook,
  AuthenticatedLayout,
  LayoutApp,
  UserProvider,
} from "src/components";
import config from "src/config";

import GlobalStyles from "../styles/GlobalStyles";
import { useApollo } from "../utils/apolloClient";

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  // Datadog RUM initialization
  datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID as string,
    clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN as string,
    site: "datadoghq.com",
    service: "vault-gui",
    env: process.env.NEXT_PUBLIC_ENV as string,
    version: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA as string,
    sampleRate: 100,
    premiumSampleRate: 0,
    trackInteractions: true,
    defaultPrivacyLevel: "mask-user-input",
  });
  datadogRum.startSessionReplayRecording();

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cache}>
        <ThemeProvider attribute="class">
          <GlobalStyles />
          <Toast.Provider swipeDirection="right">
            <Tooltip.Provider delayDuration={300}>
              <UserProvider>
                <AuthenticatedLayout>
                  <AppHook>
                    <LayoutApp renderNavMobile>
                      <Component {...pageProps} />
                      {/** Start of vanahelp Zendesk Widget script */}
                      <Script
                        id="ze-snippet"
                        src={`https://static.zdassets.com/ekr/snippet.js?key=${config.ZENDESK_WIDGET_KEY}`}
                      />
                      {/** End of vanahelp Zendesk Widget script */}
                    </LayoutApp>
                  </AppHook>
                </AuthenticatedLayout>
              </UserProvider>
            </Tooltip.Provider>
          </Toast.Provider>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default NextApp;
