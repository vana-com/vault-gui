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
    return (
      <div className="flex items-center justify-center h-screen">
        <div role="status">
          <svg
            className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
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
              We&apos;ll email you when it&apos;s ready in a couple of hours.{" "}
              <span className="text-stone-400">
                In the meantime, visit the galleries of the creative team behind
                this project.
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
