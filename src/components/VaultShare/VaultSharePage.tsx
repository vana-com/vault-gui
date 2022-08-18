import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

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
  heading = "Give Vault access",
  lede,
}: Props) => (
  <Center tw="min-h-screen">
    <Container size="lg">
      <Stack tw="flex-1 gap-6 p-insetHalf">
        <Stack tw="flex-1 flex flex-col items-center justify-center gap-0.5">
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
            <Flex tw="items-center justify-center rounded-md bg-label text-background h-[30px] w-[30px]">
              <Icon icon="carbon:data-set" height="21px" />
            </Flex>
          </Group>
          <Text as="h1" variant="title3" weight="heavy" color="label">
            {heading}
          </Text>
          <Text variant="body" color="labelTertiary">
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
