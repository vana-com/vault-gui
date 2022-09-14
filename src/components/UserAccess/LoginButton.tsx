import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, useUserContext } from "src/components";

const LoginButton = () => {
  const { loginUser, isLoading } = useUserContext();

  return (
    <Button
      variant="solid"
      size="xl"
      prefix={<Icon icon="carbon:locked" height="1.125em" />}
      css={tw`min-w-[280px] max-w-[220px] font-semibold`}
      disabled={isLoading}
      onClick={async () => loginUser(false)}
    >
      Log In
    </Button>
  );
};

export { LoginButton };
