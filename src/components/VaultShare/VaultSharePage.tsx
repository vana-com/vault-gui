// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Card,
  Container,
  Group,
  Stack,
  Text,
  VanaLogoNew,
} from "src/components";
import {
  CarbonArrowRight,
  CarbonRotate,
  ShareTestIcon,
} from "src/components/Icons";

interface Props {
  children: React.ReactNode;
  heading?: string;
  lede: string;
  accessDenied?: boolean;
}

const ICON_SIZE = "36px";

const VaultSharePage = ({
  accessDenied,
  heading = "Allow Vault access",
  lede,
  children,
}: Props) => (
  <div tw="min-h-screen flex items-center justify-center">
    <Container tw="relative" size="lg">
      <Card shadow={false} bg="bg">
        <Stack tw="flex-1 gap-6">
          <Stack tw="flex-1 flex flex-col items-center justify-center gap-0.5">
            <Group tw="gap-2 items-center pb-4">
              <VanaLogoNew boxSize={ICON_SIZE} tw="rounded-md bg-orange-500" />
              {accessDenied ? (
                <div tw="flex justify-center" style={{ width: ICON_SIZE }}>
                  <CarbonRotate boxSize="27px" />
                </div>
              ) : (
                <CarbonArrowRight boxSize={ICON_SIZE} />
              )}
              {/* TODO: allow accessor to configure their logo */}
              <ShareTestIcon
                boxSize={ICON_SIZE}
                tw="rounded-md bg-label text-background"
              />
            </Group>
            <Text as="h1" variant="title3" weight="medium" color="label">
              {heading}
            </Text>
            <Text variant="body" color="labelTertiary">
              {lede}
            </Text>
          </Stack>

          {/* CHILDREN */}
          {children}
        </Stack>
      </Card>
    </Container>
  </div>
);

export { VaultSharePage };
