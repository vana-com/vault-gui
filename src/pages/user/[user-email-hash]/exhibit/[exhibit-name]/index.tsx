/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { NextPage } from "next";
import Image from "next/future/image";
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
  const [showModal, setShowModalInternal] = useState<boolean>(false);
  const setShowModal = (
    // eslint-disable-next-line @typescript-eslint/no-shadow
    showModal: boolean,
    viewingPageIndex: number | undefined,
  ) => {
    if (showModal) {
      router.replace({
        query: { ...router.query, view: viewingPageIndex },
      });
    } else {
      router.replace({
        query: { ...router.query, view: undefined },
      });
    }

    setShowModalInternal(showModal);
  };
  const [viewing, setViewing] = useState<number>(-1);
  const [exhibit, setExhibit] = useState<Exhibit | null>(null);

  const [ref, bounds] = useMeasure();
  const screenHeight = bounds.height;

  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  const downloadUrl = (rawImageUrl: string): string =>
    `/api/utils/dl?url=${encodeURIComponent(rawImageUrl)}`;

  // Wait until path params are accessable
  useEffect(() => {
    // set viewing & modal
    const viewingPage = parseInt((viewQuery as string) ?? "-1", 10);
    if (viewingPage !== -1) {
      setViewing(viewingPage);
      setShowModal(true, viewingPage);
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

  if (showModal) {
    return (
      <div>
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
            className="p-2 border-2 border-solid"
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
          <a
            href={downloadUrl(exhibit.images[viewing])}
            download="vana_portrait.png"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="p-2 ml-8 border-2 border-solid"
              onClick={() => {
                console.log("save this image");
              }}
            >
              Download
            </button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <TitleAndMetaTags color="black" title={`Your ${exhibit.name} | Vana`} />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        <div className="pt-[20vh] mb-[20vh] Container">
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading={
              <NextLink href={`/user/${userEmailHash}`}>
                <button type="button" className="flex items-center gap-1 -ml-3">
                  <Icon icon="carbon:arrow-left" height="0.5em" />
                  <span>{exhibit.name}</span>
                </button>
              </NextLink>
            }
          >
            <p className="text-stone-400">
              {exhibit.name} images from Gallery {userEmailHash?.slice(-7)}.
              {/* TODO: add share button here… */}
            </p>
          </PageHeading>

          <div className="pt-w12 pb-w72">
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-insetHalf">
              {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
              {exhibit.images.map((imageUrl, i) => (
                <ArtCard
                  key={imageUrl}
                  imageSrc={imageUrl}
                  imageAlt={exhibit.name}
                  placeholder="blur"
                  blurDataURL={config.portraitBlurDataURL}
                  buttonOnClick={() => {
                    console.log("clickyy");
                    setShowModal(true, i);
                    setViewing(i);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        <FooterBadge screenHeight={screenHeight} blackTheme />
      </div>
      {/* <div className="flex">
        <button
          type="button"
          className="p-2 border-2 border-solid"
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
          className="p-2 border-2 border-solid"
          onClick={() => {
            router.push("/");
          }}
        >
          Create a new gallery
        </button>
      </div> */}
    </>
  );
};

export default ExhibitPage;
