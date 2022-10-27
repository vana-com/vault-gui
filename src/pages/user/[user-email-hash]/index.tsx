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
  Button,
  FooterBadge,
  GalleryGrid,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Gallery } from "src/types";
import {
  copyToClipboard,
  flattenGalleryImages,
  nameToPathName,
  share,
} from "src/utils";

const GalleryPage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  const { "user-email-hash": userEmailHash, name } = router.query;

  console.log("name", name);

  const [gallery, setGallery] = useState<Gallery | null>(null);

  const shareLink = async () => {
    const link = `${config.appBaseUrl}/user/${userEmailHash}/`;
    console.log("sharing link:", link);

    try {
      const didShare = await share({
        text: link,
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
          throw error;
        }
      }
    } catch (error) {
      console.log(
        "Something went wrong while attempting the sharing flow:",
        error,
      );

      await copyToClipboard(link);
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

  // TODO: make real via `?name=XXX` query param
  const galleryWithName = name && true;

  return (
    <>
      <TitleAndMetaTags color="black" title="Your Masterpiece | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        {/* Back to /generating */}
        <div className="fixed z-20 top-3 right-inset">
          <NextLink href="/generating">
            <button type="button" className="flex items-center gap-1">
              <Icon icon="carbon:close" height="2em" />
              <span className="hidden">Back to generating</span>
            </button>
          </NextLink>
        </div>

        {/* CONTENT */}
        <div className="pt-[12.5vh] Container">
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading={
              <div className="flex items-baseline justify-between">
                <span>
                  {galleryWithName ? (
                    <span className="capitalize">Gallery {name}</span>
                  ) : (
                    `Gallery ${userEmailHash?.slice(-4)}`
                  )}
                </span>
                {!galleryWithName && (
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
                )}
              </div>
            }
          />

          <div className="pt-w12 pb-w72">
            <div className="grid grid-cols-1 gap-4 mobile:-mx-1 md:grid-cols-4 xl:grid-cols-5">
              {gallery.exhibits.map((exhibit) => (
                <NextLink
                  key={exhibit.name}
                  href={`/user/${userEmailHash}/exhibit/${nameToPathName(
                    exhibit.name,
                  )}`}
                  passHref
                >
                  {/* <div>
                    <ArtCard
                      imageSrc={exhibit.images[exhibit.images.length - 1]}
                      imageAlt={exhibit.name}
                      size={512}
                      placeholder="blur"
                      blurDataURL={config.portraitBlurDataURL}
                    />
                    <p className="text-sm py-1.5 text-stone-500">
                      {exhibit.name}
                    </p>
                  </div> */}
                  <button type="button" className="hover:shadow-lg">
                    <GalleryGrid
                      key={gallery.userHash}
                      images={flattenGalleryImages(gallery, 12).slice(0, 3)}
                      wrapperClassName="p-3 bg-stone-100 border border-stone-200 rounded-[18px]"
                      label={
                        <p className="flex items-center gap-1 pt-2.5 pl-0.5 text-base font-medium leading-none text-black">
                          <span className="capitalize">
                            {name} {exhibit.name}
                          </span>
                          <Icon icon="carbon:arrow-right" height="1em" />
                        </p>
                      }
                    />
                  </button>
                </NextLink>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} blackTheme />
      </div>
    </>
  );
};

export default GalleryPage;
