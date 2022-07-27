// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Card,
  // Flex,
  Group,
  Link,
  // Spinner,
  Stack,
  Text,
  VanaLogo,
} from "src/components";
import { DataList } from "src/components/VaultShare";

const PermissionContract = () => (
  // stuff here soon…

  <Card>
    <Stack tw="flex-1 gap-6">
      <div tw="flex-1 flex flex-col items-center justify-center gap-1.5">
        <Group tw="gap-2">
          <Link
            href="https://vana.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" tw="grow-0 p-1 rounded-md text-slate-900">
              <VanaLogo boxSize="27px" tw="rounded-md bg-orange-500" />
            </button>
          </Link>

          <Text as="h1" variant="title3" weight="black" color="label">
            Share from Vault
          </Text>
        </Group>
        <Text variant="note" color="labelTertiary">
          Describe what we&apos;re doing here in a little more detail. Maybe add
          a link to{" "}
          <Link
            href="https://www.vana.xyz/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy
          </Link>
          .
        </Text>
      </div>
      {/* <hr /> */}

      {/* LIST OF PERMISSION ASKS */}
      <DataList />

      {/* CONFIRM */}
      <Group tw="justify-end gap-3">
        <Button variant="solid" size="xl">
          I&apos;m OK with this
        </Button>
        <Button variant="contrast" size="xl">
          Deny access
        </Button>
        {/* <Text variant="body" color="label">
                Are you OK with this?
              </Text> */}
      </Group>
    </Stack>
  </Card>
);

export { PermissionContract };
