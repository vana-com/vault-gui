/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import config from "src/config";
import { Exhibit } from "src/types";
import { copyToClipboard } from "src/utils";

const ExhibitPage: NextPage = () => {
  const router = useRouter();
  const {
    "user-email-hash": userEmailHash,
    "exhibit-name": exhibitName,
    view: viewQuery,
  } = router.query;

  // If the view query is set, directly set that as the view & open the modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const [viewing, setViewing] = useState<number>(-1);
  const [exhibit, setExhibit] = useState<Exhibit | null>(null);

  const downloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Wait until path params are accessable
  useEffect(() => {
    // set viewing & modal
    const viewingPage = parseInt((viewQuery as string) ?? "-1", 10);
    if (viewingPage !== -1) {
      setViewing(viewingPage);
      setShowModal(true);
    }

    const fetchExhibit = async () => {
      if (userEmailHash) {
        const res = await fetch(
          `/api/user/${userEmailHash}/exhibit/${exhibitName}`,
        );
        if (res.status < 399) {
          const data = await res.json();
          setExhibit(data);
        }
      }
    };
    fetchExhibit();

    console.log("viewing", viewing);
  }, [router.asPath]);

  if (!exhibit) {
    return <p>Loading...</p>;
  }

  if (showModal) {
    return (
      <div>
        <p className="text-white">beep boop -- im a dialog </p>
        <Image
          className="w-full"
          src={exhibit.images[viewing ?? 0]}
          alt={exhibit.name}
          width={250}
          height={250}
          loader={({ src }) => src}
          placeholder="blur"
          blurDataURL={config.portraitBlurDataURL}
        />
        <div className="flex">
          <button
            type="button"
            className="border-solid border-2 p-2"
            onClick={() => {
              console.log("share this image");

              const path = `${
                config.appBaseUrl
              }/user/${userEmailHash}/exhibit/${exhibitName}?view=${
                viewing ?? 0
              }`;
              copyToClipboard(path);
            }}
          >
            Share Image
          </button>
          {/* We wrap this bttn in <a> as we need it for a file download */}
          {/* <a
            href={exhibit.images[viewing]}
            download="your_sweet_ai_image.png"
            target="_blank"
            rel="noreferrer"
          > */}
          <button
            type="button"
            className="border-solid border-2 p-2 ml-8"
            onClick={() => {
              console.log("save this image");

              downloadImage(exhibit.images[viewing], "your_sweet_image.png");
            }}
          >
            Download
          </button>
          {/* </a> */}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="m-8">These images in the style of {exhibit.name} </h1>
      <div className="columns-3">
        {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
        {exhibit.images.map((imageUrl, i) => (
          <figure
            key={imageUrl}
            className="bg-slate-100 rounded-xl p-2 m-2 cursor-pointer"
            onClick={() => {
              console.log("clickyy");
              setShowModal(true);
              setViewing(i);
            }}
          >
            <Image
              src={imageUrl}
              alt={exhibit.name}
              width={250}
              height={250}
              loader={({ src }) => src}
              placeholder="blur"
              blurDataURL={config.portraitBlurDataURL}
            />
          </figure>
        ))}
      </div>
      <div className="flex">
        <button
          type="button"
          className="border-solid border-2 p-2"
          onClick={() => {
            console.log("Shared");

            const path = `${config.appBaseUrl}/user/${userEmailHash}/exhibit/${exhibitName}`;
            copyToClipboard(path);
          }}
        >
          Share {exhibit.name} Images
        </button>
        <button
          type="button"
          className="border-solid border-2 p-2"
          onClick={() => {
            router.push("/");
          }}
        >
          Create a new gallery
        </button>
      </div>
    </>
  );
};

export default ExhibitPage;
