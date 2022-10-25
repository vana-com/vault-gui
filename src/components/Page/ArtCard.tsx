import Image from "next/future/image";

interface Props {
  imageSrc: string;
  imageAlt: string;
  size?: number;
  children?: React.ReactNode;
  buttonOnClick?: () => void;
  // TODO: update with Next Image props
  [x: string]: any;
}

const ArtCard = ({
  imageSrc,
  imageAlt,
  size = 280,
  children,
  buttonOnClick,
  ...props
}: Props) => (
  <button type="button" className="w-full" onClick={buttonOnClick}>
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
    {children}
  </button>
);

export { ArtCard };
