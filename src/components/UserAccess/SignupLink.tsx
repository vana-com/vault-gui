// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { styledLink, useUserContext } from "src/components";
import config from "src/config";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

const SignupLink = () => {
  const { loginUser, isLoading } = useUserContext();

  return (
    <button
      type="button"
      css={[styledLink, tw`underline`]}
      disabled={isLoading}
      onClick={async () => {
        heapTrackServerSide("no_user", HEAP_EVENTS.SIGNUP_LINK);
        loginUser(true);
      }}
    >
      One-click sign up.
    </button>
  );
};

export { SignupLink };
