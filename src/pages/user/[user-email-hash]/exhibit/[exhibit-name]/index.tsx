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
  Button,
  FooterBadge,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Exhibit } from "src/types";
import { copyToClipboard, share } from "src/utils";

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

  const shareLink = async () => {
    const link = `${
      config.appBaseUrl
    }/user/${userEmailHash}/exhibit/${exhibitName}?view=${viewing ?? 0}`;
    console.log("sharing link:", link);

    try {
      const didShare = await share({
        link,
      });

      // Fallback
      if (!didShare) {
        try {
          await copyToClipboard(link);
        } catch (error) {
          console.log(
            "Something went wrong while copying the clipboard:",
            error,
          );
          throw error;
        }
      }
    } catch (error) {
      console.log(
        "Something went wrong while attempting the sharing flow:",
        error,
      );

      await copyToClipboard(link);
    }
  };

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
    return <Spinner />;
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
              <div className="flex items-baseline justify-between">
                <NextLink href="/generating">
                  <button
                    type="button"
                    className="flex items-center gap-1 -ml-3"
                  >
                    <Icon icon="carbon:arrow-left" height="0.5em" />
                    <span className="w-[240px] truncate text-left">
                      {exhibit.name}
                    </span>
                  </button>
                </NextLink>
                <Button
                  className="!text-stone-500 text-sm font-sans !h-[27px] transform translate-y-[-0.2em] !px-2.5"
                  onClick={(_: any) => shareLink()}
                >
                  <Icon icon="carbon:arrow-up" height="1.0em" />
                  <span className="transform translate-y-[-0.015em]">
                    Share
                  </span>
                </Button>
              </div>
            }
          >
            <p className="text-stone-400">
              {exhibit.name} images from{" "}
              <NextLink href={`/user/${userEmailHash}`}>
                <button type="button" className="link">
                  Gallery {userEmailHash?.slice(-4)}
                </button>
              </NextLink>
              .
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
