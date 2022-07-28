// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Card,
  CheckboxDefault,
  // Flex,
  Group,
  // Spinner,
  Stack,
  Text,
  VanaLogoNew,
} from "src/components";
import { CarbonArrowRight, ShareTestIcon } from "src/components/Icons";

interface PermissionContractProps {
  accessor: string;
  children: React.ReactNode;
  onAccept: () => void;
  onDeny: () => void;
}

const ICON_SIZE = "36px";

const PermissionContract = ({
  accessor,
  onAccept,
  onDeny,
  children,
}: PermissionContractProps) => (
  // stuff here soon…

  <Card shadow={false} bg="bg">
    <Stack tw="flex-1 gap-6">
      <div tw="flex-1 flex flex-col items-center justify-center gap-0.5">
        <Group tw="gap-2 items-center pb-4">
          <VanaLogoNew boxSize={ICON_SIZE} tw="rounded-md bg-orange-500" />
          <CarbonArrowRight boxSize={ICON_SIZE} />
          {/* TODO: allow accessor to configure their logo? */}
          <ShareTestIcon
            boxSize={ICON_SIZE}
            tw="rounded-md bg-label text-background"
          />
        </Group>
        <Text as="h1" variant="title3" weight="medium" color="label">
          Allow Vault access
        </Text>
        <Text variant="body" color="labelTertiary">
          Do you want to allow {accessor} access to your Vault?
        </Text>
      </div>

      {/* LIST OF PERMISSION ASKS */}
      {children}

      {/* ACCESS ONLY ONCE? */}
      <Group tw="justify-end pr-1.5">
        <CheckboxDefault label="Give access only once" />
      </Group>

      {/* CONFIRM */}
      <Stack tw="gap-3">
        <Group tw="justify-end gap-3">
          <Button variant="solid" size="xl" onClick={onAccept}>
            Allow
          </Button>
          <Button variant="outline" size="xl" onClick={onDeny}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Stack>
  </Card>
);

export { PermissionContract };
