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
  ButtonClose,
  DialogControlled,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Exhibit } from "src/types";
import { blobify, copyToClipboard, fileify, share } from "src/utils";

const DIALOG_BUTTON_STYLE =
  "!text-stone-500 !border-transparent !bg-transparent";

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

  const shareLink = async (link: string) => {
    console.log("sharing link:", link);

    try {
      const didShare = await share({
        text: link,
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

  const shareFile = async (imageUrl: string, fallbackLink: string) => {
    console.log("file link:", imageUrl);
    const blob = await blobify(imageUrl);
    const fileToShare = fileify(blob, "my_awesome_vana_portrait.png");

    const files = [fileToShare];

    try {
      const didShare = await share({
        files,
      });

      // Fallback
      if (!didShare) {
        try {
          await copyToClipboard(fallbackLink);
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

      await copyToClipboard(fallbackLink);
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

  const galleryWithName = name && true;
  const galleryHash = userEmailHash?.slice(-4);
  const backToGalleryLink = `/user/${userEmailHash}${
    name ? `?name=${name?.toLowerCase()}` : ""
  }`;

  return (
    <>
      <TitleAndMetaTags color="black" title={`Your ${exhibit.name} | Vana`} />

      <div
        ref={ref}
        className={clsx("relative min-h-screen")}
        style={{ height: `${screenHeight}px` }}
      >
        {/* CLOSE BACK */}
        <ButtonClose link={backToGalleryLink} label="Back to generating" />

        {/* CONTENT */}
        <div className="pt-[12.5vh] Container">
          <PageHeading
            inView={inView}
            viewRefNode={<div ref={viewRef} className="absolute -top-[1vh]" />}
            heading={
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
                        `${
                          config.appBaseUrl
                        }/user/${userEmailHash}/exhibit/${exhibitName}${
                          name ? `?name=${name?.toLowerCase()}` : ""
                        }`,
                      )
                    }
                  >
                    <Icon icon="carbon:arrow-up" height="1.0em" />
                    <span className="transform translate-y-[-0.015em]">
                      Share
                    </span>
                  </Button>
                )}
              </div>
            }
          >
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
          </PageHeading>

          <div className="pt-w12 pb-w72">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5">
              {/* CARD with MODAL */}
              {/* Use the first image in an exhibit as the thumbnail for the entire exhibit */}
              {exhibit.images.map((imageUrl, i) => (
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
                        className="relative p-6 overflow-hidden border rounded-xl border-stone-200"
                      >
                        <ArtCard
                          imageSrc={imageUrl}
                          imageAlt={exhibit.name}
                          wrapperClassName="!bg-transparent"
                          imageClassName="rounded-[8px] transform scale-[1.075]"
                        />
                        <div className="absolute bottom-0 w-full py-[6px] text-stone-500 text-xs font-medium uppercase text-[8px] tracking-widest">
                          Original
                        </div>
                      </div>
                    ) : (
                      <button type="button" key={imageUrl}>
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
                  <div className="relative flex flex-col gap-w16">
                    <div className="overflow-hidden aspect-square">
                      <Image
                        className="w-full"
                        src={exhibit.images[viewing ?? 0]}
                        // src={imageUrl}
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
                        <div className="overflow-hidden border rounded-md border-stone-200">
                          <Button
                            size="lg"
                            className={DIALOG_BUTTON_STYLE}
                            onClick={() => {
                              console.log("share this image");

                              const imageURL = downloadUrl(
                                exhibit.images[viewing],
                              );

                              const fallbackURL = `${
                                config.appBaseUrl
                              }/user/${userEmailHash}/exhibit/${exhibitName}?view=${
                                viewing ?? 0
                              }`;

                              shareFile(imageURL, fallbackURL);
                            }}
                          >
                            <Icon icon="carbon:arrow-up-right" height="1.0em" />
                            <span className="transform translate-y-[-0.015em]">
                              Share
                            </span>
                          </Button>
                          {/* Wrapped in <a> for file download purposes */}
                          <a
                            href={downloadUrl(exhibit.images[viewing])}
                            download="vana_portrait.png"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button
                              size="lg"
                              className={DIALOG_BUTTON_STYLE}
                              onClick={() => {
                                console.log("save this image");
                              }}
                            >
                              <Icon icon="carbon:download" height="1.0em" />
                              <span className="transform translate-y-[-0.015em]">
                                Download
                              </span>
                            </Button>
                          </a>
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
                </DialogControlled>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LOGO */}
        {/* <FooterBadge screenHeight={screenHeight} blackTheme /> */}
      </div>
    </>
  );
};

export default ExhibitPage;
