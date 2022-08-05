// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DialogClose,
  DialogModal,
  Group,
  Stack,
  Text,
} from "src/components";
import { CarbonSecurity } from "src/components/Icons";

interface Props {
  logOut?: () => void;
  isLoading: boolean;
}

const LogoutButton = ({ logOut, isLoading }: Props) => (
  <DialogModal
    buttonSlot={
      <Button
        type="button"
        variant="outline"
        size="md"
        prefix={<CarbonSecurity />}
      >
        Log Out
      </Button>
    }
  >
    <Stack tw="gap-1 justify-center">
      <Text color="label" variant="title2" tw="text-center">
        Are you sure?
      </Text>
      <Text color="labelSecondary" tw="text-center">
        Confirm your secure logout
      </Text>

      <Group tw="gap-4 pt-7 justify-center">
        <Button
          variant="solid"
          size="lg"
          prefix={<CarbonSecurity />}
          isLoading={isLoading}
          // type="button"
          onClick={logOut}
        >
          Log Out
        </Button>
        <DialogClose asChild>
          <Button variant="outline" size="lg">
            Not yet
          </Button>
        </DialogClose>
      </Group>
    </Stack>
  </DialogModal>
);

export { LogoutButton };
