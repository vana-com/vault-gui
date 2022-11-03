import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  // framer animations
  const listWrapper = {
    hide: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // type: "spring" prevents staggerChildren from working…
        // If any non-orchestration transition values are set without a type property, it defaults to type: "tween". So don't bother setting.
        // https://www.framer.com/docs/transition/#orchestration
        // delay: 1,
        ease: "anticipate",
        duration: 0.5,
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const listItem = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
      <TitleAndMetaTags color="black" title="Your Masterpiece | Vana" />

      {/* CLOSE BACK */}
      {galleryWithName && (
        <ButtonClose link="/generating" label="Back to generating" />
      )}

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="Container pt-[12.5vh]"
      >
        <PageHeading>
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
                <span className="transform translate-y-[-0.015em]">Share</span>
              </Button>
            )}
          </div>
        </PageHeading>
      </motion.div>

      {/* GALLERIES */}
      <div className="pt-w12 Container">
        <motion.div
          variants={listWrapper}
          initial="hide"
          animate="show"
          className="grid grid-cols-1 gap-4 mobile:-mx-1 md:grid-cols-4 xl:grid-cols-5"
        >
          {gallery.exhibits.map((exhibit) => (
            <NextLink
              key={exhibit.name}
              href={`/user/${userEmailHash}/exhibit/${nameToPathName(
                exhibit.name,
              )}${name ? `?name=${name?.toLowerCase()}` : ""}`}
              passHref
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <motion.a
                key={exhibit.name}
                variants={listItem}
                className="block"
              >
                <GalleryGrid
                  key={gallery.userHash}
                  images={exhibit.images.slice(1, 4)}
                  wrapperClassName={clsx(
                    "p-3 bg-stone-100 border border-stone-200 rounded-[18px] relative transition-shadow hover:shadow-lg",
                    // TODO @Callum: use this design?
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
              </motion.a>
            </NextLink>
          ))}
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default GalleryPage;
