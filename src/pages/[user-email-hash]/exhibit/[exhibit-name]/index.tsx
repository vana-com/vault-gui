import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Exhibit } from "src/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { "user-email-hash": userEmailHash, "exhibit-name": exhibitName } =
    context.query;

  /** 
  const res = await fetch(`/api/user-${userEmailHash}/gallery/${galleryId}/exhibit/${exhibitName}`);
  if (res.status > 399) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();*/

  return {
    props: {
      exhibit: {
        name: "Test",
        images: [
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
          "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
        ],
      },
    },
  };
};

interface ExhbitPageProps {
  exhibit: Exhibit;
}

const ExhbitPage: NextPage<ExhbitPageProps> = ({ exhibit }) => {
  const router = useRouter();

  const areImagesMine = false;
  const [showImageGalleryModal, setShowImageGalleryModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // DONT MODIFY BELOW

  // DONT MODIFY ABOVE

  if (showImageGalleryModal) {
    return (
      <div
        className="place-content-center"
        onClick={() => setShowImageGalleryModal(false)}
      >
        <figure className="bg-slate-100 rounded-xl p-4 m-1 dark:bg-slate-800">
          <img
            className="w-full"
            src={exhibit.images[imageIndex]}
            alt={exhibit.name}
          />
        </figure>
        <button
          className="border-solid border-2 p-2"
          onClick={() => {
            if (areImagesMine) {
              // TODO: Download user image
            } else {
              router.push("/");
            }
          }}
        >
          {areImagesMine ? "Download your image to share" : "Try it yourself"}
        </button>
      </div>
    );
  }

  return (
    <>
      <h1 className="m-8">Your images in the style of {exhibit.name} </h1>
      <div className="columns-3">
        {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
        {exhibit.images.map((imageUrl, i) => (
          <figure
            className="bg-slate-100 rounded-xl p-4 m-1 dark:bg-slate-800"
            onClick={() => {
              setShowImageGalleryModal(true);
              setImageIndex(i);
            }}
          >
            <img className="w-full" src={imageUrl} alt={exhibit.name} />
          </figure>
        ))}
      </div>
      <button
        className="border-solid border-2 p-2"
        onClick={() => {
          if (areImagesMine) {
            // TODO: Download user image
          } else {
            router.push("/");
          }
        }}
      >
        {areImagesMine ? "Share your gallery" : "Try it yourself"}
      </button>
    </>
  );
};

export default ExhbitPage;
