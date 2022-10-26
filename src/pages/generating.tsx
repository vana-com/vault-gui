import { Icon } from "@iconify/react";
import clsx from "clsx";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  FooterBadge,
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

  console.log("galleries", galleries);

  if (!galleries) {
    return <Spinner />;
  }

  console.log("galleries", galleries);

  return (
    <>
      <TitleAndMetaTags color="black" title="Generating | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[12.5vh] Container">
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading={
              <>
                Your masterpiece{" "}
                <span className="mobile:table">is being crafted</span>
              </>
            }
          >
            <p>
              Sit tight while we build your custom-generated art.{" "}
              <span className="text-stone-500">
                We will email you as soon as it is ready.
              </span>
            </p>
          </PageHeading>

          <div className="pt-w24 pb-w72">
            {/* sticky top-0 z-[11] */}
            <div className="flex flex-col gap-4 bg-white">
              <hr className="border-t-8 text-stone-100" />
              <p className="text-stone-500">
                <span className="!font-bold text-black Text-meta">
                  While you&apos;re waiting…{" "}
                </span>
                Get to know the creative team behind Vana Portrait.
              </p>
            </div>
            <div className="grid grid-cols-1 pt-5 md:grid-cols-2 xl:grid-cols-3 gap-inset">
              {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
              {galleries.map((gallery, i) => (
                <NextLink
                  key={gallery.userHash}
                  href={`/user/${gallery.userHash}/`}
                  passHref
                >
                  <GalleryGrid
                    showAsOriginal
                    images={flattenGalleryImages(gallery, 6)}
                    wrapperClassName="p-2 bg-white border border-stone-200 rounded-[14px] hover:cursor-pointer hover:shadow-lg hover:border-transparent"
                    label={
                      <p className="flex items-center gap-1 pt-2 text-sm font-medium leading-none text-black">
                        <span>{vanaTeamData[i].name}</span>
                        <Icon icon="carbon:arrow-right" height="1em" />
                      </p>
                    }
                  />
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

export default GeneratePage;
