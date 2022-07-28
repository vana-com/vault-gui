// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, CheckboxDefault, Group, Stack } from "src/components";
import { VaultSharePage } from "src/components/VaultShare";

interface PermissionContractProps {
  accessor: string;
  children: React.ReactNode;
  onAccept: () => void;
  onDeny: () => void;
}

const PermissionContract = ({
  accessor,
  onAccept,
  onDeny,
  children,
}: PermissionContractProps) => (
  <VaultSharePage
    lede={`Do you want to allow ${accessor} access to your Vault?`}
  >
    {/* COMPOSE: PERMISSION ASKS LIST */}
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
  </VaultSharePage>
);

export { PermissionContract };
