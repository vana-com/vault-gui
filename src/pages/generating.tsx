import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  Footer,
  GalleryGrid,
  PageHeading,
  TitleAndMetaTags,
} from "src/components";
import { Spinner } from "src/components/Spinner";
import config from "src/config";
import {
  useUserGalleryCache,
  writeUserGalleryCache,
} from "src/hooks/useUserGallery";
// import { framerListItem, framerListWrapper } from "src/data";
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
  const [galleries, setGalleries] = useState<Gallery[] | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      if (!galleries) {
        // Store the results
        const allGalleryData: Gallery[] = [];

        // Create promises for all team members
        const galleryPromises = vanaTeamData.map(({ hash: emailHash }) =>
          fetch(`/api/user/${emailHash}`)
            .then((res) => res.json())
            .then((gallery: Gallery) => {
              // Cache the value
              writeUserGalleryCache(emailHash, gallery);
              return gallery;
            })
            .catch((error) => console.log(error)),
        );

        for (let i = 0; i < galleryPromises.length; i++) {
          const p = galleryPromises[i];
          // eslint-disable-next-line no-await-in-loop
          const gallery = await p;

          // eslint-disable-next-line no-continue
          if (!gallery) continue;

          allGalleryData.push(gallery);
          setGalleries([...allGalleryData]);
        }

        setGalleries(allGalleryData);
      }
    };

    // Quick and dirty since all team members stay constant
    // Just check the first team member, if they dont exist in the cache assume all of them dont
    const cached = useUserGalleryCache(vanaTeamData[0].hash);

    if (!cached) {
      fetchGallery();
    } else {
      const allCached = vanaTeamData.map(
        ({ hash }) => useUserGalleryCache(hash) as Gallery,
      );
      setGalleries([...allCached]);
    }
  }, [router.asPath]);

  // framer animations
  const framerListWrapper = {
    hide: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // type: "spring" prevents staggerChildren from working…
        // If any non-orchestration transition values are set without a type property, it defaults to type: "tween". So don't bother setting.
        // https://www.framer.com/docs/transition/#orchestration
        delay: 1,
        when: "beforeChildren",
        ease: "anticipate",
        duration: 0.5,
        // children animations will start after this duration
        delayChildren: 0.25,
        // animations of child components can be staggered by this
        staggerChildren: 0.25,
      },
    },
  };

  const framerListItem = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  if (!galleries) {
    return <Spinner />;
  }

  return (
    <>
      <TitleAndMetaTags
        color="black"
        title="Generating your portraits | Vana"
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-[12.5vh] Container"
      >
        <PageHeading
          underHeading={
            <p>
              <span className="text-stone-500">
                We&apos;ll email you when it&apos;s ready in a few hours.
              </span>
            </p>
          }
        >
          Sit tight while we <span className="table">style your portrait</span>
        </PageHeading>
      </motion.div>

      {/* MESSAGE */}
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.125 }}
        className="Container pt-w24"
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

      {/* GALLERIES */}
      <div className="Container min-h-[60vh]">
        <motion.div
          variants={framerListWrapper}
          initial="hide"
          animate="show"
          className="grid grid-cols-1 gap-3 pt-5 xl:gap-5 md:grid-cols-2 xl:grid-cols-2 mobile:-mx-1 md:-mx-3"
        >
          {galleries.map((gallery, i) => (
            <motion.div
              key={gallery.userHash}
              variants={framerListItem}
              className="block"
            >
              <NextLink
                key={gallery.userHash}
                href={`/user/${gallery.userHash}?name=${vanaTeamData[
                  i
                ].name.toLowerCase()}`}
                passHref
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  key={gallery.userHash}
                  className="block min-h-[261px] md:min-h-0"
                >
                  <GalleryGrid
                    key={gallery.userHash}
                    images={flattenGalleryImages(gallery, 6)}
                    // In generating, we want to show a 2x3 grid at all times
                    gridCols={3}
                    wrapperClassName="p-3 bg-stone-100 hover:bg-stone-50 border border-stone-200 rounded-[18px] CardHover"
                    label={
                      <p className="flex items-center gap-1 pt-3 pl-0.5 text-sm font-medium leading-none text-black">
                        <span>{vanaTeamData[i].name}</span>
                        <Icon icon="carbon:arrow-right" height="1em" />
                      </p>
                    }
                  />
                </a>
              </NextLink>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default GeneratePage;
