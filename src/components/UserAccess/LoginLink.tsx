// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { styledLink, useUserContext } from "src/components";

const LoginLink = () => {
  const { loginUser, isLoading } = useUserContext();

  return (
    <button
      type="button"
      css={[styledLink, tw`underline`]}
      disabled={isLoading}
      onClick={loginUser}
    >
      One-click sign up.
    </button>
  );
};

export { LoginLink };
