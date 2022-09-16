// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { styledLink, useUserContext } from "src/components";

const SignupLink = () => {
  const { loginUser, isLoading } = useUserContext();

  return (
    <button
      type="button"
      css={[styledLink, tw`underline`]}
      disabled={isLoading}
      onClick={async () => loginUser(true)}
    >
      One-click sign up.
    </button>
  );
};

export { SignupLink };
