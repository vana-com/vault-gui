import Head from "next/head";
import { useRouter } from "next/router";

import config from "src/config";

type TitleAndMetaTagsProps = {
  description?: string;
  image?: string;
  pathname?: string;
  title?: string;
  url?: string;
  color?: string;
};

export function TitleAndMetaTags({
  color = "white",
  description = "&ldquo;Portrait&rdquo; by Vana is a generative art studio that can create self-portraits of you in infinite styles.",
  image,
  pathname,
  title = "Vana",
  url = config.portraitPublicURL,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const imageUrl = `${url}/images/social/${image || "twitter_preview.webp"}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta content={description} name="description" />

      <meta content={`${url}${path}`} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={imageUrl} property="og:image" />

      <meta content="@usevana" name="twitter:site" />
      <meta content="summary_large_image" name="twitter:card" />

      <link rel="icon" type="image/png" sizes="32x32" href="/vana-32x32.png" />
      <link rel="shortcut icon" type="image/x-icon" href="/vana.svg" />

      <meta content={color} name="theme-color" />

      {/* Mark this website as a Standalone app */}
      <link rel="manifest" href="/site.webmanifest" />
      {/* Make status bar transparent */}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {/* Disallow scaling, make status bar transparent */}
      <meta
        name="viewport"
        content="initial-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
    </Head>
  );
}
