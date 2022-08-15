// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  VanaLogo,
} from "src/components";
import {
  CarbonArrowRight,
  CarbonConcept,
  CarbonRotate,
} from "src/components/Icons";

interface Props {
  accessDenied?: boolean;
  // accessDomain: string;
  children: React.ReactNode;
  heading?: string;
  lede: string;
}

const ICON_SIZE = "36px";

const VaultSharePage = ({
  accessDenied,
  // accessDomain,
  children,
  heading = "Give Vault access",
  lede,
}: Props) => (
  <div tw="min-h-screen flex items-center justify-center">
    <Container size="lg">
      <Card shadow={false} bg="bg">
        <Stack tw="flex-1 gap-6">
          <Stack tw="flex-1 flex flex-col items-center justify-center gap-0.5">
            <Group tw="gap-2 items-center pb-4">
              <VanaLogo boxSize={ICON_SIZE} tw="rounded-md bg-orange-500" />
              {accessDenied ? (
                <div tw="flex justify-center" style={{ width: ICON_SIZE }}>
                  <CarbonRotate boxSize="27px" />
                </div>
              ) : (
                <CarbonArrowRight boxSize={ICON_SIZE} />
              )}
              {/* TODO: allow accessor to configure their logo */}
              <Flex tw="items-center justify-center rounded-md bg-label text-background h-[36px] w-[36px]">
                <CarbonConcept boxSize="21px" />
              </Flex>
            </Group>
            <Text as="h1" variant="title3" weight="medium" color="label">
              {heading}
            </Text>
            <Text variant="body" color="labelTertiary">
              {lede}
            </Text>
            {/* <Text variant="footnote" mono color="labelQuaternary" tw="pt-1.5">
              Requested from: {accessDomain}
            </Text> */}
          </Stack>

          {/* CHILDREN */}
          {children}
        </Stack>
      </Card>
    </Container>
  </div>
);

export { VaultSharePage };
