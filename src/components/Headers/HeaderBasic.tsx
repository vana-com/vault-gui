import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Text, VanaLogo } from "src/components";

// How can we use Pick<TextVariant on a type?
type SubheadingVariant = "headingMeta" | "heading" | "subheading";
interface HeaderBasicProps {
  heading: string;
  logoLink?: string;
  subheading: string;
  subheadingVariant?: SubheadingVariant;
}

const HeaderBasic = ({
  heading,
  logoLink = "/vault",
  subheading,
  subheadingVariant = "headingMeta",
}: HeaderBasicProps) => (
  <div tw="flex flex-col items-center justify-center gap-1.5">
    <NextLink passHref href={logoLink}>
      <button type="button" tw="grow-0 p-1 rounded-md text-slate-900">
        <VanaLogo boxSize="42px" tw="rounded-md bg-orange-500" />
      </button>
    </NextLink>
    {/* titleLarge */}
    <Text as="h1" variant="display" weight="black" color="label">
      {heading}
    </Text>
    <Text
      as="h2"
      variant={subheadingVariant}
      weight="bold"
      color="labelTertiary"
    >
      {subheading}
    </Text>
  </div>
);

export { HeaderBasic };
