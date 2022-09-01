import { Icon } from "@iconify/react";
import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  Link,
  NavAsideBetaTypeform,
  PopoverHelp,
  Stack,
  styledNavLink,
  styledNavLinkActive,
  styledNavLinkBox,
  styledNavLinkWithIcon,
  Text,
  TooltipDefault,
  useUserContext,
  WithIcon,
} from "src/components";
import config from "src/config";

interface Props {
  showTypeform?: boolean;
}

const NavAsideContent = ({ showTypeform }: Props) => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {/* MENU */}
      {isAuthenticated && (
        <Stack tw="pt-insetHalf gap-px">
          <NextLink passHref href="/">
            <Text
              as="a"
              variant="base"
              weight="medium"
              css={[styledNavLink, styledNavLinkActive]}
            >
              <WithIcon
                prefix={<Icon icon="heroicons-solid:folder" height="0.85em" />}
              >
                My data
              </WithIcon>
            </Text>
          </NextLink>
          <div css={styledNavLinkBox}>
            <TooltipDefault label="Coming soon">
              <Text
                variant="base"
                weight="medium"
                tw="text-labelTertiary cursor-default"
                css={styledNavLinkWithIcon}
              >
                <WithIcon
                  prefix={<Icon icon="heroicons-solid:clock" height="0.85em" />}
                >
                  Access log
                </WithIcon>
              </Text>
            </TooltipDefault>
          </div>
          <div />
        </Stack>
      )}

      {/* BETA */}
      <div tw="mt-auto pb-inset md:pb-insetDouble">
        {showTypeform && (
          <>
            <hr tw="border-separatorLight" />
            <NavAsideBetaTypeform />
          </>
        )}
        <hr tw="border-separatorLight" />

        {/* SUPPORT */}
        <Stack tw="pt-3 md:pt-5">
          <span tw="hidden md:inline">
            <PopoverHelp />
          </span>
          <Flex tw="h-navLinkH px-inset items-center md:hidden">
            <Text variant="note" weight="medium" tw="text-labelSecondary">
              Need help?{" "}
              <Link href={`mailto:${config.vanaSupportEmail}`}>Email us.</Link>
            </Text>
          </Flex>
          {/* TODO: add after new security website page ready */}
          {/* <Link
            href={config.vanaPrivacyURL}
            target="_blank"
            rel="noopener noreferrer"
            underline={false}
          >
            <Text variant="note" weight="medium" css={styledNavLink}>
              Security &amp; privacy
            </Text>
          </Link> */}
          <div css={styledNavLinkBox}>
            <TooltipDefault label="Coming soon">
              <Text variant="note" weight="medium" tw="hover:cursor-pointer">
                Security &amp; privacy
              </Text>
            </TooltipDefault>
          </div>
        </Stack>
      </div>
    </>
  );
};

export { NavAsideContent };
