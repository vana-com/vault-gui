/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/future/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import {
  ArtCard,
  Button,
  DialogControlled,
  Footer,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { useUserGalleryPartialCache } from "src/hooks/useUserGallery";
import { Exhibit } from "src/types";
import { shareImage, shareLink } from "src/utils";

const DIALOG_BUTTON_STYLE =
  "!text-stone-500 !border-transparent !bg-transparent";

const SLIDER_BUTTON_STYLE = clsx(
  "absolute top-1/2 z-10 flex items-center justify-center  rounded-full cursor-pointer  transition-colors duration-200 ease-in-out",
  // bg
  "lg:bg-white hover:lg:bg-stone-100",
  // color
  "text-white lg:text-black",
  // sizes
  "w-10 h-10 -mt-w24 lg:w-24 lg:h-24 lg:-mt-12",
  // ix
  "focus:outline-none focus-visible:outline-none",
);

interface QueryParams {
  "user-email-hash": string;
  "exhibit-name": string;
  view: string;
  name: string;
}

const ExhibitPage: NextPage = () => {
  const router = useRouter();
  const {
    "user-email-hash": userEmailHash,
    "exhibit-name": exhibitName,
    view: viewQuery,
    name,
  } = router.query as unknown as QueryParams;

  const [showModalInternal, setShowModalInternal] = useState<boolean>(false);
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
      // const { view: _, ...rest } = router.query;
      // router.replace({
      //   query: { ...rest },
      // });
      router.replace({
        query: { ...router.query, view: undefined },
      });
    }

    setShowModalInternal(showModal);
  };
  const [viewing, setViewing] = useState<number>(-1);
  const [exhibit, setExhibit] = useState<Exhibit | null>(null);

  // FIXME: There is an intermittent issue when clicking on left and right arrows (sometimes doesn't work)
  // Needs review
  const incrementLeft = useCallback(() => {
    if (!exhibit || exhibit?.images.length === 0) return undefined;
    if (viewing > 0) {
      setViewing(viewing - 1);
      router.replace({
        query: { ...router.query, view: viewing - 1 },
      });
    }
    return undefined;
  }, [exhibit, viewing, router.query]);

  const incrementRight = useCallback(() => {
    if (!exhibit || exhibit?.images.length === 0) return undefined;
    if (viewing < exhibit.images.length - 1) {
      setViewing(viewing + 1);
      router.replace({
        query: { ...router.query, view: viewing + 1 },
      });
    }
    return undefined;
  }, [exhibit, router.query]);

  // When the modal is active, listen for keyboard events
  useEffect(() => {
    if (!exhibit || exhibit?.images.length === 0) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false, undefined);
      }

      if (event.key === "ArrowLeft") {
        incrementLeft();
      }

      if (event.key === "ArrowRight") {
        incrementRight();
      }
    };

    if (showModalInternal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModalInternal, exhibit, viewing, incrementLeft, incrementRight]);

  // Wait until path params are accessible
  useEffect(() => {
    // set viewing & modal
    const viewingPage = parseInt((viewQuery as string) ?? "-1", 10);
    if (viewingPage >= 0) {
      setViewing(viewingPage);
      setShowModal(true, viewingPage);
    } else {
      setViewing(-1);
      setShowModalInternal(false);
    }
    // Fetch exhibit details
    if (!exhibit) {
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

      // Check the cache if there is an exhibit
      const cache = useUserGalleryPartialCache(userEmailHash, exhibitName);

      if (!cache) fetchExhibit(); // Cache miss
      else setExhibit(cache); // Cache hit
    }
  }, [router.asPath]);

  // Reset viewing image when dialog is closed
  useEffect(() => {
    if (!showModalInternal) {
      setViewing(-1);
    }
  }, [showModalInternal]);

  if (!exhibit) {
    return <Spinner />;
  }

  const galleryWithName = name && true;
  const galleryHash = userEmailHash?.slice(-4);
  const backToGalleryLink = `/user/${userEmailHash}${
    name ? `?name=${name?.toLowerCase()}` : ""
  }`;
  const imageName = () => `${galleryHash}-${exhibitName}-${viewing}.png`;

  // framer animations
  const listWrapper = {
    hide: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // type: "spring" prevents staggerChildren from working…
        // If any non-orchestration transition values are set without a type property, it defaults to type: "tween". So don't bother setting.
        // https://www.framer.com/docs/transition/#orchestration
        // delay: 1,
        ease: "anticipate",
        duration: 0.5,
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const listItem = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
      <TitleAndMetaTags color="black" title={`Your ${exhibit.name} | Vana`} />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-[12.5vh] Container"
      >
        <PageHeading
          underHeading={
            <p className="text-stone-400">
              <NextLink href={backToGalleryLink}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="flex items-center gap-1">
                  <Icon icon="carbon:arrow-left" height="1em" />
                  <span className="">
                    Back to{" "}
                    {galleryWithName ? (
                      <span className="capitalize">{name}&apos;s Gallery</span>
                    ) : (
                      `${galleryHash} Gallery`
                    )}{" "}
                  </span>
                </a>
              </NextLink>
            </p>
          }
        >
          <div className="flex items-baseline justify-between">
            <span>
              {galleryWithName ? (
                <span className="capitalize">
                  {name} {exhibit.name}
                </span>
              ) : (
                `${galleryHash} ${exhibit.name}`
              )}
            </span>
            {!galleryWithName && (
              <Button
                size="sm"
                className="!text-stone-500 !bg-white transform translate-y-[-0.2em]"
                onClick={(_: any) =>
                  shareLink(
                    "Check out my Vana Portrait!",
                    `${
                      config.appBaseUrl
                    }/user/${userEmailHash}/exhibit/${exhibitName}${
                      name ? `?name=${name?.toLowerCase()}` : ""
                    }`,
                  )
                }
              >
                <Icon icon="carbon:arrow-up" height="1.0em" />
                <span className="transform translate-y-[-0.015em]">Share</span>
              </Button>
            )}
          </div>
        </PageHeading>
      </motion.div>

      {/* GALLERIES */}
      <div className="pt-w12 Container min-h-[557px]">
        <motion.div
          variants={listWrapper}
          initial="hide"
          animate="show"
          className="grid grid-cols-2 gap-3 xl:gap-5 md:grid-cols-3 mobile:-mx-1"
        >
          {/* CARD with MODAL */}
          {/* Use the first image in an exhibit as the thumbnail for the entire exhibit */}
          {exhibit.images.map((imageUrl, i) => (
            <motion.div
              key={imageUrl}
              variants={listItem}
              className="block hey"
            >
              <DialogControlled
                key={imageUrl}
                open={showModalInternal}
                onOpenChange={() => {
                  setShowModal(!showModalInternal, i);
                }}
                overlayClassName="overflow-y-auto !bg-white"
                contentClassName="!w-screen"
                // onPointerDownOutside={(event) => event.preventDefault()}
                triggerNode={
                  galleryWithName && i === 0 ? (
                    <div
                      key={imageUrl}
                      className="relative p-6 overflow-hidden bg-black border xl:p-12 rounded-xl border-stone-300"
                    >
                      <ArtCard
                        imageSrc={imageUrl}
                        imageAlt={exhibit.name}
                        wrapperClassName="!bg-transparent"
                        imageClassName="rounded-[8px] transform scale-[1.075]"
                      />
                      <div className="absolute bottom-0 pb-[6px] xl:pb-[18px] text-stone-400 text-xs font-medium uppercase text-[8px] tracking-widest">
                        Original
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      key={imageUrl}
                      className="overflow-hidden rounded-xl CardHover ring-offset-[5px]"
                    >
                      <ArtCard
                        key={imageUrl}
                        imageSrc={imageUrl}
                        imageAlt={exhibit.name}
                        placeholder="blur"
                        blurDataURL={config.portraitBlurDataURL}
                        imageClassName="transform scale-[1.075]"
                      />
                    </button>
                  )
                }
              >
                <>
                  {/* SHOW SINGLE IMAGE DIALOG */}
                  {viewing >= 0 && (
                    <>
                      {/* Arrows for left/right navigation */}
                      <button
                        type="button"
                        onClick={incrementLeft}
                        className={clsx(
                          SLIDER_BUTTON_STYLE,
                          "left-1.5 lg:left-w6",
                        )}
                        style={{ opacity: viewing <= 0 ? 0.25 : 1 }}
                      >
                        <Icon icon="carbon:chevron-left" height="2.5em" />
                      </button>
                      <button
                        type="button"
                        onClick={incrementRight}
                        className={clsx(
                          SLIDER_BUTTON_STYLE,
                          "right-1.5 lg:right-w6",
                        )}
                        style={{
                          opacity:
                            viewing >= exhibit.images.length - 1 ? 0.25 : 1,
                        }}
                      >
                        <Icon icon="carbon:chevron-right" height="2.5em" />
                      </button>

                      {/* EXHIBIT */}
                      <div className="relative flex flex-col max-w-2xl mx-auto gap-w16">
                        <div className="overflow-hidden select-none bg-chartreuse-500 aspect-square">
                          <Image
                            className="object-cover w-full"
                            src={exhibit.images[viewing ?? 0]}
                            alt={exhibit.name}
                            width={250}
                            height={250}
                            loader={({ src }) => src}
                            placeholder="blur"
                            blurDataURL={config.portraitBlurDataURL}
                          />
                        </div>
                        <div className="relative">
                          <div className="flex justify-center w-full">
                            <div className="p-1 overflow-hidden border rounded-md border-stone-200">
                              {/* Share image */}
                              <Button
                                size="lg"
                                className={DIALOG_BUTTON_STYLE}
                                onClick={() => {
                                  const imageFilename = imageName();
                                  shareImage(
                                    exhibit.images[viewing],
                                    imageFilename,
                                  );
                                }}
                              >
                                <Icon
                                  icon="carbon:arrow-up-right"
                                  height="1.0em"
                                />
                                <span className="transform translate-y-[-0.015em]">
                                  Share
                                </span>
                              </Button>

                              {/* Download image */}
                              <Button
                                size="lg"
                                className={DIALOG_BUTTON_STYLE}
                                onClick={async () => {
                                  const blob = await fetch(
                                    exhibit.images[viewing],
                                  ).then((res) => res.blob());
                                  const a = document.createElement("a");
                                  a.href = URL.createObjectURL(blob);
                                  a.download = imageName();
                                  document.body.appendChild(a);
                                  a.click();
                                  document.body.removeChild(a);
                                }}
                              >
                                <Icon icon="carbon:download" height="1.0em" />
                                <span className="transform translate-y-[-0.015em]">
                                  Download
                                </span>
                              </Button>

                              {/* Close preview */}
                              <Button
                                size="lg"
                                className={DIALOG_BUTTON_STYLE}
                                onClick={() => setShowModalInternal(false)}
                              >
                                <Icon icon="carbon:close" height="1.25em" />
                                <span className="transform translate-y-[-0.015em]">
                                  Close
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              </DialogControlled>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER LOGO */}
      <Footer />
    </>
  );
};

export default ExhibitPage;
