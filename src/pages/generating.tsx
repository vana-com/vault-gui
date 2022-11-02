import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  Footer,
  GalleryGrid,
  PageHeading,
  TitleAndMetaTags,
} from "src/components";
import { Spinner } from "src/components/Spinner";
import config from "src/config";
import { Gallery } from "src/types";
import { flattenGalleryImages } from "src/utils";

const vanaTeamData = [
  { name: "Anna", hash: config.annaEmailHash },
  { name: "Art", hash: config.artEmailHash },
  { name: "Colin", hash: config.colinEmailHash },
  { name: "Ellie", hash: config.ellieEmailHash },
  { name: "Zach", hash: config.zachEmailHash },
  { name: "Phoebe", hash: config.phoebeEmailHash },
];

// pre-render this page at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}

const GeneratePage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  const [galleries, setGalleries] = useState<Gallery[] | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      if (!galleries) {
        const galleryPromises = vanaTeamData.map(({ hash: emailHash }) =>
          fetch(`/api/user/${emailHash}`),
        );

        const galleriesData = [];

        for (let i = 0; i < galleryPromises.length; i++) {
          const galleryPromise = galleryPromises[i];
          // eslint-disable-next-line no-await-in-loop
          const res = await galleryPromise;

          if (res.status < 399) {
            // eslint-disable-next-line no-await-in-loop
            const data = await res.json();
            galleriesData.push(data);
            // Call setGalleries for each image so that the images can load before
            // all gallery network requests are made.
            setGalleries([...galleriesData]);
          }
        }

        setGalleries(galleriesData);
      }
    };
    fetchGallery();
  }, [router.asPath]);

  if (!galleries) {
    return <Spinner />;
  }

  return (
    <>
      <TitleAndMetaTags color="black" title="Generating | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen pt-safe-top")}
        style={{ height: `${screenHeight}px` }}
      >
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
                <>
                  Sit tight while we style your portrait
                  {/* <span className="mobile:table">custom-generated art</span> */}
                </>
              }
            >
              <p>
                <span className="text-stone-500">
                  We&apos;ll email you when it&apos;s ready in a few hours.
                </span>
              </p>
            </PageHeading>
          </motion.div>

          <div className="pt-w24 pb-w24">
            {/* sticky top-0 z-[11] */}
            <motion.div
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex flex-col gap-4 bg-white">
                <hr className="border-t-8 text-stone-100" />
                <p className="text-stone-500">
                  <span className="!font-bold text-black Text-meta">
                    While you&apos;re waiting…{" "}
                  </span>
                  Get to know the creative team behind Vana Portrait.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* TODO @Callum: add mobile:-mx-1 after refactoring blocks with .Container */}
              <div className="grid grid-cols-1 gap-3 pt-5 md:grid-cols-2 xl:grid-cols-3">
                {galleries.map((gallery, i) => (
                  <NextLink
                    key={gallery.userHash}
                    href={`/user/${gallery.userHash}?name=${vanaTeamData[
                      i
                    ].name.toLowerCase()}`}
                    passHref
                  >
                    <button type="button">
                      <GalleryGrid
                        key={gallery.userHash}
                        images={flattenGalleryImages(gallery, 6)}
                        wrapperClassName="p-3 bg-stone-100 border border-stone-200 rounded-[18px] transition-shadow hover:shadow-lg"
                        label={
                          <p className="flex items-center gap-1 pt-2 pl-0.5 text-sm font-medium leading-none text-black">
                            <span>{vanaTeamData[i].name}</span>
                            <Icon icon="carbon:arrow-right" height="1em" />
                          </p>
                        }
                      />
                    </button>
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

export default GeneratePage;
