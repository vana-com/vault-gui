// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Group, Stack, Text } from "src/components";

interface PermissionContractProps {
  onAccept: () => void;
  onDeny: () => void;
}

const PermissionContract = ({ onAccept, onDeny }: PermissionContractProps) => (
  <Stack tw="items-end">
    {/* ACCESS TIMESPAN */}
    {/* LATER: check or select access time */}
    {/* <CheckboxDefault label="Give access only once" /> */}
    <Text color="labelTertiary" variant="note" tw="pr-1 pb-w4">
      This will give access only once
    </Text>

    {/* CONFIRM */}
    <Group tw="justify-end gap-3">
      <Button variant="outline" size="xl" onClick={onDeny}>
        Cancel
      </Button>
      <Button variant="solid" size="xl" onClick={onAccept}>
        Allow
      </Button>
    </Group>
  </Stack>
);

export { PermissionContract };
