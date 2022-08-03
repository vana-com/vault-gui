import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { NavbarWrapper, Text, VanaLogo, WithIcon } from "src/components";
import {
  CarbonArrowUpRight,
  CarbonDotMark,
  CarbonTime,
} from "src/components/Icons";

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => (
  <NavbarWrapper>
    <div tw="col-span-3 flex items-center gap-2">
      <VanaLogo boxSize="2em" tw="bg-newAccent" />
      <Text variant="headingMeta" weight="bold">
        Vault
      </Text>
    </div>
    <div tw="col-span-3 flex items-center gap-8">
      <NextLink passHref href="/">
        <Text
          as="a"
          variant="base"
          weight="semibold"
          tw="flex items-center gap-1"
        >
          <WithIcon prefix={<CarbonDotMark />}>My data</WithIcon>
        </Text>
      </NextLink>
      <NextLink passHref href="/">
        <Text
          variant="base"
          weight="semibold"
          tw="cursor-not-allowed flex items-center gap-1 text-labelTertiary"
        >
          <WithIcon prefix={<CarbonTime />}>Access log</WithIcon>
        </Text>
      </NextLink>
    </div>
    <div tw="col-span-4 flex justify-end">
      <div tw="flex items-center justify-between min-w-[320px] bg-fillSecondary h-[40px] px-4 rounded-md">
        <div tw="flex items-center gap-2">
          <div tw="">
            <img src="/images/vana-ring.png" alt="Vana Ring" />
          </div>
          <Text variant="headingMeta" weight="bold" tw="text-labelTertiary">
            Beta
          </Text>
        </div>
        <Text variant="base" weight="medium" tw="flex items-center gap-1">
          <WithIcon suffix={<CarbonArrowUpRight />}>Give us feedback</WithIcon>
        </Text>
      </div>
    </div>
    <div tw="col-span-2 flex justify-end">
      {/* USER AVATAR */}
      <div tw="flex items-center justify-center bg-fillSecondary rounded-md h-[40px] w-[40px]">
        <Text as="a" variant="body" weight="semibold">
          M
        </Text>
      </div>
    </div>

    {children}
  </NavbarWrapper>
);

export { Navbar };
