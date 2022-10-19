import { Test } from "mocha";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Gallery } from "src/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { "user-email-hash": userEmailHash, "gallery-id": galleryId } =
    context.query;

  /** 
  const res = await fetch(`/api/user-${userEmailHash}/gallery/${galleryId}`);
  if (res.status > 399) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();*/

  return {
    props: {
      gallery: {
        exhibits: [
          {
            name: "Test",
            images: [
              "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
            ],
          },
          {
            name: "Testing",
            images: [
              "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
            ],
          },
          {
            name: "Test",
            images: [
              "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
            ],
          },
          {
            name: "Test",
            images: [
              "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
            ],
          },
          {
            name: "Test",
            images: [
              "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
            ],
          },
        ],
      },
    }, // will be passed to the page component as props
  };
};

interface GalleryPageProps {
  gallery: Gallery;
}

const GalleryPage: NextPage<GalleryPageProps> = ({ gallery }) => {
  const router = useRouter();

  const { "user-email-hash": userEmailHash, "gallery-id": galleryId } =
    router.query;

  return (
    <>
      <h1 className="m-8">Your Masterpiece</h1>
      <div className="columns-2">
        {/** Use the first image in an exhibit as the thumbnail for the entire exhibit  */}
        {gallery.exhibits.map((exhibit) => (
          <figure
            className="bg-slate-100 rounded-xl p-8 m-2 dark:bg-slate-800"
            onClick={() =>
              router.push(
                `/${userEmailHash}/gallery/${galleryId}/exhibit/${exhibit.name.toLowerCase()}`,
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
    </>
  );
};

export default GalleryPage;
