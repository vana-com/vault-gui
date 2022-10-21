import clsx from "clsx";
import type { NextPage } from "next";
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
          config.kahtafEmailHash,
          config.annaEmailHash,
          config.artEmailHash,
        ];

        const galleryPromises = vanaTeamEmailHashes.map((emailHash) =>
          fetch(`/api/user/${emailHash}`),
        );

        const responses = await Promise.all(galleryPromises);

        const galleriesData = [];

        for (let i = 0; i < responses.length; i++) {
          const res = responses[i];
          console.log("res.stat", res.status);

          if (res.status < 399) {
            // eslint-disable-next-line no-await-in-loop
            const data = await res.json();
            galleriesData.push(data);
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
              className="bg-slate-100 rounded-xl p-8 m-2 dark:bg-slate-800"
              key={gallery.userHash}
              onClick={() => router.push(`/user/${gallery.userHash}/`)}
            >
              <img
                className="w-full"
                src={gallery.exhibits[0].images[0]}
                alt="Vana Team Member"
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
