import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  Button,
  ButtonClose,
  Footer,
  GalleryGrid,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Gallery } from "src/types";
import { nameToPathName, shareLink } from "src/utils";

interface QueryParams {
  "user-email-hash": string;
  name: string;
}

const GalleryPage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  const { "user-email-hash": userEmailHash, name } =
    router.query as unknown as QueryParams;

  const [gallery, setGallery] = useState<Gallery | null>(null);

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

  const galleryWithName = name && true;

  return (
    <>
      <TitleAndMetaTags color="black" title="Your Masterpiece | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen pt-safe-top")}
        style={{ height: `${screenHeight}px` }}
      >
        {/* CLOSE BACK */}
        {galleryWithName && (
          <ButtonClose link="/generating" label="Back to generating" />
        )}

        {/* CONTENT */}
        <div className="pt-[12.5vh] Container">
          <motion.div
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.25 }}
          >
            <PageHeading
              inView={inView}
              viewRefNode={
                <div ref={viewRef} className="absolute -top-[1vh]" />
              }
              heading={
                <div className="flex items-baseline justify-between">
                  <span>
                    {galleryWithName ? (
                      <span className="capitalize">{name}&apos;s Gallery</span>
                    ) : (
                      `Gallery ${userEmailHash?.slice(-4)}`
                    )}
                  </span>
                  {!galleryWithName && (
                    <Button
                      onClick={async (_: any) =>
                        shareLink(
                          "Check out my Vana Portrait!",
                          `${config.appBaseUrl}/user/${userEmailHash}/`,
                        )
                      }
                      size="sm"
                      className="!text-stone-500 !bg-white transform translate-y-[-0.2em]"
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
          </motion.div>

          <div className="pt-w12 pb-w12">
            <motion.div
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="grid grid-cols-1 gap-4 mobile:-mx-1 md:grid-cols-4 xl:grid-cols-5">
                {gallery.exhibits.map((exhibit) => (
                  <NextLink
                    key={exhibit.name}
                    href={`/user/${userEmailHash}/exhibit/${nameToPathName(
                      exhibit.name,
                    )}${name ? `?name=${name?.toLowerCase()}` : ""}`}
                    passHref
                  >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <GalleryGrid
                        key={gallery.userHash}
                        images={exhibit.images.slice(1, 4)}
                        wrapperClassName={clsx(
                          "p-3 bg-stone-100 border border-stone-200 rounded-[18px] relative transition-shadow hover:shadow-lg",
                          // "after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[100px] after:bg-gradient-to-l after:from-stone-100 after:via-stone-100",
                        )}
                        label={
                          <p className="flex items-center gap-1 pt-2.5 pl-0.5 text-base font-medium leading-none text-black">
                            <span className="capitalize">
                              {name} {exhibit.name}
                            </span>
                            <Icon icon="carbon:arrow-right" height="1em" />
                          </p>
                        }
                      />
                    </a>
                  </NextLink>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer wrapperClassName="pt-w36 pb-w72" />
      </div>
    </>
  );
};

export default GalleryPage;
