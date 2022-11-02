/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/future/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  ArtCard,
  Button,
  ButtonClose,
  DialogControlled,
  Footer,
  PageHeading,
  Spinner,
  TitleAndMetaTags,
} from "src/components";
import config from "src/config";
import { Exhibit } from "src/types";
import { shareImage, shareLink } from "src/utils";

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

  const { ref: viewRef, inView } = useInView({
    threshold: 0,
  });

  // Wait until path params are accessible
  useEffect(() => {
    // set viewing & modal
    const viewingPage = parseInt((viewQuery as string) ?? "-1", 10);
    if (viewingPage !== -1) {
      setViewing(viewingPage);
      setShowModal(true, viewingPage);
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
      fetchExhibit();
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

  return (
    <>
      <TitleAndMetaTags color="black" title={`Your ${exhibit.name} | Vana`} />

      {/* CLOSE BACK */}
      {galleryWithName && (
        <ButtonClose link={backToGalleryLink} label="Back to generating" />
      )}

      {/* CONTENT */}
      <div className="pt-[12.5vh] Container">
        <motion.div
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.25 }}
        >
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
        </motion.div>

        <div className="pt-w12 pb-w12">
          <motion.div
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
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
                  <>
                    {/* SHOW SINGLE IMAGE DIALOG */}
                    {viewing >= 0 && (
                      <div className="relative flex flex-col gap-w16">
                        <div className="overflow-hidden bg-black aspect-square">
                          <Image
                            className="object-cover w-full"
                            src={exhibit.images[viewing ?? 0]}
                            alt={exhibit.name}
                            width={250}
                            height={250}
                            loader={({ src }) => src}
                            // placeholder="blur"
                            // blurDataURL={config.portraitBlurDataURL}
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
                                  const imageFilename = `${userEmailHash}-${exhibitName}-${viewing}.png`;
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
                                  a.download = `${userEmailHash}-${exhibitName}-${viewing}.png`;
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
                    )}
                  </>
                </DialogControlled>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER LOGO */}
      <Footer wrapperClassName="pt-w36 pb-w72" />
    </>
  );
};

export default ExhibitPage;
