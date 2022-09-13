// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { styledLink, useUserContext } from "src/components";
import { setWeb3AuthModalCopy } from "src/utils";

const LoginLink = () => {
  const { loginUser, isLoading } = useUserContext();
  // const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    // wait a little for the querySelector to be rendered
    setTimeout(() => {
      // console.log("isSignup inside", isSignup);
      console.log("isLoading inside", isLoading);
      setWeb3AuthModalCopy("Sign up");
    }, 1000);
  }, [isLoading]);

  // console.log("isSignup outside", isSignup);
  // console.log("isLoading outside", isLoading);

  return (
    <button
      type="button"
      css={[styledLink, tw`underline`]}
      disabled={isLoading}
      onClick={loginUser}
      // onClick={() => {
      //   setIsSignup(true);
      //   loginUser();
      // }}
    >
      One-click sign up.
    </button>
  );
};

export { LoginLink };
