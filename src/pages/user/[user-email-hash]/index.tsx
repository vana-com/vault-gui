/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  ArtCard,
  Button,
  FooterBadge,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Gallery } from "src/types";
import { copyToClipboard, nameToPathName, share } from "src/utils";

const GalleryPage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  const { "user-email-hash": userEmailHash } = router.query;

  const [gallery, setGallery] = useState<Gallery | null>(null);

  const shareLink = async () => {
    const link = `${config.appBaseUrl}/user/${userEmailHash}/`;
    console.log("sharing link:", link);

    try {
      const didShare = await share({
        title: "Your Vana Portrait",
        text: "you are amazing!!!",
        link,
      });

      // Fallback
      if (!didShare) {
        try {
          await copyToClipboard(link);
        } catch (error) {
          console.log(
            "Something went wrong while copying the clipboard:",
            error,
          );
        }
      }
    } catch (error) {
      console.log(
        "Something went wrong while attempting the sharing flow:",
        error,
      );
    }
  };

  useEffect(() => {
    const fetchGallery = async () => {
      if (userEmailHash) {
        const res = await fetch(`/api/user/${userEmailHash}/`);
        console.log("res.status", res.status);
        if (res.status < 399) {
          const data = await res.json();
          setGallery(data);
        }
      }
    };
    fetchGallery();
  }, [router.asPath]);

  if (!gallery) {
    return <Spinner />;
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Your Masterpiece | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[20vh] mb-[20vh] Container">
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading={
              <div className="flex items-baseline justify-between">
                <NextLink href="/generating">
                  <button
                    type="button"
                    className="flex items-center gap-1 -ml-3"
                  >
                    <Icon icon="carbon:arrow-left" height="0.5em" />
                    <span>Gallery {userEmailHash?.slice(-4)}</span>
                  </button>
                </NextLink>
                <Button
                  onClick={async (_: any) => shareLink()}
                  size="sm"
                  className="!text-stone-500 text-sm transform translate-y-[-0.2em]"
                >
                  <Icon icon="carbon:arrow-up" height="1.0em" />
                  <span className="transform translate-y-[-0.015em]">
                    Share
                  </span>
                </Button>
              </div>
            }
          >
            {/* <p className="text-stone-400">Generated Monday October 24, 2022</p> */}
          </PageHeading>

          <div className="pt-w12 pb-w72">
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-insetHalf">
              {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
              {gallery.exhibits.map((exhibit) => (
                <NextLink
                  key={exhibit.name}
                  href={`/user/${userEmailHash}/exhibit/${nameToPathName(
                    exhibit.name,
                  )}`}
                  passHref
                >
                  <ArtCard
                    imageSrc={exhibit.images[0]}
                    imageAlt={exhibit.name}
                    size={512}
                    placeholder="blur"
                    blurDataURL={config.portraitBlurDataURL}
                  >
                    <p className="text-sm py-1.5 text-stone-500">
                      {exhibit.name}
                    </p>
                  </ArtCard>
                </NextLink>
              ))}
            </div>
          </div>
          {/* <button
            type="button"
            className="p-2 mt-4 border-2 border-solid"
            onClick={() => {
              console.log("share this gallery");

              const path = `${config.appBaseUrl}/user/${userEmailHash}`;
              copyToClipboard(path);
            }}
          >
            Share Gallery
          </button> */}
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} blackTheme />
      </div>
    </>
  );
};

export default GalleryPage;
