import clsx from "clsx";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";

import {
  ArtCard,
  FooterBadge,
  PageHeading,
  TitleAndMetaTags,
} from "src/components";
import { Spinner } from "src/components/Spinner";
import config from "src/config";
import { Gallery } from "src/types";

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
        const vanaTeamEmailHashes = [
          config.annaEmailHash,
          config.artEmailHash,
          config.kahtafEmailHash,
        ];

        const galleryPromises = vanaTeamEmailHashes.map((emailHash) =>
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
        <div className="pt-[20vh] mb-[20vh] Container">
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading="Your masterpiece is being crafted"
          >
            <p>
              Sit tight. Your artwork is coming to life. You will receive an
              email once it is ready.{" "}
              <span className="text-stone-400">
                In the meantime, meet the creative team behind this project.
              </span>
            </p>
          </PageHeading>

          <div className="pt-w12 pb-w72">
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-inset">
              {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
              {galleries.map((gallery) => (
                <NextLink
                  key={gallery.userHash}
                  href={`/user/${gallery.userHash}/`}
                  passHref
                >
                  <ArtCard
                    imageSrc={gallery.exhibits[0].images[0]}
                    imageAlt={gallery.userHash}
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
