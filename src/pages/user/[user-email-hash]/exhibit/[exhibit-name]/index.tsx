/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Exhibit } from "src/types";

const ExhbitPage: NextPage = () => {
  const router = useRouter();
  const {
    "user-email-hash": userEmailHash,
    "exhibit-name": exhibitName,
    view: viewQuery,
  } = router.query;

  // If the view query is set, directly set that as the view & open the modal
  const [showModal, setShowModal] = useState<boolean>(
    (viewQuery as unknown) !== undefined,
  );
  const [viewing, setViewing] = useState<number>(
    (viewQuery as unknown as number) ?? -1,
  );
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
    const fetchExhibit = async () => {
      const res = await fetch(
        `/api/user/${userEmailHash}/exhibit/${exhibitName}`,
      );
      if (res.status < 399) {
        const data = await res.json();

        setExhibit(data);
      }
    };
    fetchExhibit();
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
        />
        <div className="flex">
          <button
            type="button"
            className="border-solid border-2 p-2"
            onClick={() => {
              console.log("share this image");

              // copy link to clipboard??
            }}
          >
            Share this image
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
            className="border-solid border-2 p-2"
            onClick={() => {
              console.log("save this image");

              downloadImage(exhibit.images[viewing], "your_sweet_ai_image.png");
            }}
          >
            Save this image
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
            className="bg-slate-100 rounded-xl p-2 m-2 dark:bg-slate-800"
            onClick={() => {
              console.log("clickyy");
              setShowModal(true);
              setViewing(i);
            }}
          >
            <Image
              className="w-full"
              src={imageUrl}
              alt={exhibit.name}
              width={250}
              height={250}
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
          }}
        >
          Share this gallery
        </button>
        <button
          type="button"
          className="border-solid border-2 p-2"
          onClick={() => {
            console.log("Create one like this");
            // router.
          }}
        >
          Create one like this
        </button>
      </div>
    </>
  );
};

export default ExhbitPage;
