import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Spinner, Text, WithIcon } from "src/components";
import { navLinkStyle } from "src/components/Nav/Nav.css";

import { useUserContext } from "./UserContext";

/* TODO: Callum will replace LoginButton within this component after `development` merge */
const Logout = () => {
  const { logoutUser, isLoading } = useUserContext();

  return (
    <Text
      as="button"
      variant="base"
      weight="medium"
      css={[navLinkStyle, tw`px-3 text-label`]}
      onClick={logoutUser}
    >
      <WithIcon
        prefix={
          isLoading ? (
            <Spinner />
          ) : (
            <Icon icon="heroicons-solid:logout" height="0.85em" />
          )
        }
      >
        Log out
      </WithIcon>
    </Text>
  );
};

export { Logout };
