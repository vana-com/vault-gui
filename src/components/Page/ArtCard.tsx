import clsx from "clsx";
// import Image, { ImageProps } from "next/future/image";
import Image from "next/future/image";

// TODO: extends ImageProps creates a type error I can't figure out right now…
interface Props {
  imageSrc: string;
  imageAlt: string;
  size?: number;
  wrapperClassName?: string;
  imageClassName?: string;
  // TODO: update with Next Image props
  [x: string]: any;
}

const ArtCard = ({
  imageSrc,
  imageAlt,
  size = 280,
  wrapperClassName = "rounded-xl",
  imageClassName = "",
  ...props
}: Props) => (
  <div
    className={clsx(
      "overflow-hidden bg-stone-50 aspect-square",
      wrapperClassName,
    )}
  >
    <Image
      className={clsx("object-cover w-full aspect-square", imageClassName)}
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
