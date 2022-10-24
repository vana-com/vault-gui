import clsx from "clsx";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

import {
  FooterBadge,
  GenerateHeadingSuccess,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Gallery } from "src/types";

const GeneratePage: NextPage = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

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
    return <p>Loading...</p>;
  }

  console.log("galleries", galleries);

  return (
    <>
      <TitleAndMetaTags color="black" title="Generating | Vana" />

      <div
        ref={ref}
        className={clsx("relative min-h-screen bg-white")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[30vh]">
          <div className="bg-white px-inset py-w8">
            <div className="sticky flex flex-col gap-w6">
              <GenerateHeadingSuccess>
                <></>
              </GenerateHeadingSuccess>
            </div>
          </div>
        </div>

        <div className="columns-2 pb-[30vh]">
          {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
          {galleries.map((gallery) => (
            <button
              type="button"
              className="bg-slate-100 rounded-xl p-2 m-2 dark:bg-slate-800 max-w-md"
              key={gallery.userHash}
              onClick={() => router.push(`/user/${gallery.userHash}/`)}
            >
              <Image
                className="w-full"
                src={gallery.exhibits[0].images[0]}
                alt="Vana Team Member"
                width={250}
                height={250}
                loader={({ src }) => src}
              />
            </button>
          ))}
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} />
      </div>
    </>
  );
};

export default GeneratePage;
