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
  description = "Shifting the flow of data for a more prosperous world",
  image,
  pathname,
  title = "Vana",
  url = config.vanaPublicURL,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const imageUrl = `${url}/social/${image || "default.png"}`;
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
    </Head>
  );
}
