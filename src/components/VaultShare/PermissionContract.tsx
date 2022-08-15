// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Group, Text } from "src/components";

interface PermissionContractProps {
  children: React.ReactNode;
  onAccept: () => void;
  onDeny: () => void;
}

const PermissionContract = ({
  onAccept,
  onDeny,
  children,
}: PermissionContractProps) => (
  <>
    {/* COMPOSE: PERMISSION ASKS LIST */}
    {children}

    {/* ACCESS TIMESPAN */}
    <Group tw="justify-end pr-1">
      {/* LATER: check or select access time */}
      {/* <CheckboxDefault label="Give access only once" /> */}
      <Text color="labelTertiary" variant="note">
        This will give access only once
      </Text>
    </Group>

    {/* CONFIRM */}
    <Group tw="justify-end gap-3">
      <Button variant="outline" size="xl" onClick={onDeny}>
        Cancel
      </Button>
      <Button variant="solid" size="xl" onClick={onAccept}>
        Allow
      </Button>
    </Group>
  </>
);

export { PermissionContract };
