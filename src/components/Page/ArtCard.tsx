// import Image, { ImageProps } from "next/future/image";
import Image from "next/future/image";

// TODO: extends ImageProps creates a type error I can't figure out right now…
interface Props {
  imageSrc: string;
  imageAlt: string;
  size?: number;
  // TODO: update with Next Image props
  [x: string]: any;
}

const ArtCard = ({ imageSrc, imageAlt, size = 280, ...props }: Props) => (
  <div className="overflow-hidden bg-stone-50 aspect-square rounded-xl">
    <Image
      className="object-cover w-full aspect-square"
      src={imageSrc}
      alt={imageAlt}
      width={size}
      height={size}
      loader={({ src }) => src}
      {...props}
    />
  </div>
);

export { ArtCard };
