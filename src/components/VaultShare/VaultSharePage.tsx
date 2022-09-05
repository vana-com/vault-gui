import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from "twin.macro";

import {
  Center,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  VanaLogo,
} from "src/components";

interface Props {
  accessDenied?: boolean;
  accessDomain?: string;
  children: React.ReactNode;
  heading?: string;
  lede: string;
}

const ICON_SIZE = "30px";

const VaultSharePage = ({
  accessDenied,
  accessDomain,
  children,
  heading = "Grant Vault access",
  lede,
}: Props) => (
  <Center tw="min-h-screen">
    <Container size="lg">
      {/* MAIN PANEL: min-height allows the child panel to use flex-1 to always fill the remaining space. When the permissions copy increases, we can simply adjust the min-height here. */}
      <Stack tw="gap-6 p-insetHalf min-h-[540px]">
        <Stack tw="flex flex-col items-center justify-center gap-0.5">
          <Group tw="gap-2 items-center pb-4">
            <VanaLogo
              boxSize={ICON_SIZE}
              tw="rounded-md bg-label text-background"
            />
            {accessDenied ? (
              <div tw="flex justify-center" style={{ width: ICON_SIZE }}>
                <Icon icon="carbon:rotate" height="27px" />
              </div>
            ) : (
              <Icon icon="carbon:arrow-right" height={ICON_SIZE} />
            )}
            <Flex
              tw="items-center justify-center rounded-md bg-label text-background"
              style={{ width: ICON_SIZE, height: ICON_SIZE }}
            >
              <Icon icon="carbon:data-set" height="21px" />
            </Flex>
          </Group>
          <Text as="h1" variant="title3" weight="heavy" color="label">
            {heading}
          </Text>
          <Text variant="body" color="labelTertiary" tw="pt-0.5">
            {lede}
          </Text>
          {accessDomain && (
            <Text variant="footnote" mono color="labelQuaternary" tw="pt-1.5">
              Requested from: {accessDomain}
            </Text>
          )}
        </Stack>

        {/* CHILDREN */}
        {children}
      </Stack>
    </Container>
  </Center>
);

export { VaultSharePage };
