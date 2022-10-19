import { Test } from "mocha";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery } from "src/types";

const GalleryPage: NextPage = () => {
  const router = useRouter();

  const { "user-email-hash": userEmailHash } = router.query;

  const [gallery, setGallery] = useState<Gallery | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const res = await fetch(`/api/${userEmailHash}/`);
      if (res.status < 399) {
        const data = await res.json();

        setGallery(data);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      <h1 className="m-8">Your Masterpiece</h1>
      {!gallery ? (
        <p>Loading...</p>
      ) : (
        <div className="columns-2">
          {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
          {gallery.exhibits.map((exhibit) => (
            <figure
              className="bg-slate-100 rounded-xl p-8 m-2 dark:bg-slate-800"
              onClick={() =>
                router.push(
                  `/${userEmailHash}/exhibit/${exhibit.name.toLowerCase()}`,
                )
              }
            >
              <img
                className="w-full"
                src={exhibit.images[0]}
                alt={exhibit.name}
              />
              <p>{exhibit.name}</p>
            </figure>
          ))}
        </div>
      )}
    </>
  );
};

export default GalleryPage;
