/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import config from "src/config";
import { Gallery } from "src/types";
import { copyToClipboard, nameToPathName } from "src/utils";

const GalleryPage: NextPage = () => {
  const router = useRouter();

  const { "user-email-hash": userEmailHash } = router.query;

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

  console.log("gallery", gallery);

  return (
    <>
      <h1 className="m-8">Your Masterpiece</h1>
      {!gallery ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="columns-2">
            {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
            {gallery.exhibits.map((exhibit) => (
              <figure
                className="bg-slate-100 rounded-xl p-2 m-2 dark:bg-slate-800 cursor-pointer"
                key={exhibit.name}
                onClick={() =>
                  router.push(
                    `/user/${userEmailHash}/exhibit/${nameToPathName(
                      exhibit.name,
                    )}`,
                  )
                }
              >
                <Image
                  className="w-full"
                  src={exhibit.images[0]}
                  alt={exhibit.name}
                  height={512}
                  width={512}
                  loader={({ src }) => src}
                  placeholder="blur"
                  blurDataURL={config.portraitBlurDataURL}
                />
                <p>{exhibit.name}</p>
              </figure>
            ))}
          </div>
          <button
            type="button"
            className="border-solid border-2 p-2 mt-4"
            onClick={() => {
              console.log("share this gallery");

              const path = `${config.appBaseUrl}/user/${userEmailHash}`;
              copyToClipboard(path);
            }}
          >
            Share Gallery
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
