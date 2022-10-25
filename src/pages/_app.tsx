import "src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { datadogRum } from "@datadog/browser-rum";
import * as Tooltip from "@radix-ui/react-tooltip";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

// import { AppHook } from "src/components";
import config from "src/config";

import { useApollo } from "../utils/apolloClient";

/* 
  TODO: 
  re-add in UserProvider, AuthenticatedLayout & LayoutApp components once we have design in place
 */

const NextApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);
  const router = useRouter();

  // Datadog RUM initialization
  datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID as string,
    clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN as string,
    site: "datadoghq.com",
    service: "ingenium-gui",
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
      <Tooltip.Provider delayDuration={300}>
        {/* <AppHook> */}
        <Component {...pageProps} />
        {!config.routesToHideZendeskWidget.some((path) =>
          router.pathname.startsWith(path),
        ) && (
          <Script
            id="ze-snippet"
            src={`https://static.zdassets.com/ekr/snippet.js?key=${config.ZENDESK_WIDGET_KEY}`}
          />
        )}
      </Tooltip.Provider>
    </ApolloProvider>
  );
};

export default NextApp;
