// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Link } from "src/components";
import { ToastDefault } from "src/components/Toast";

const { openLoginModalConfig, web3AuthInstance } = config;

const Login = ({ logIn, loginError, setLoginError }: LoginProps) => (
  <>
    <Button
      type="button"
      variant="solid"
      size="xl"
      css={tw`min-w-[220px] max-w-[220px]`}
      onClick={logIn}
    >
      Log In
    </Button>

    {/* TOAST for any errors */}
    <ToastDefault
      open={loginError}
      onOpenChange={setLoginError}
      duration={12000}
      variant="error"
      title="Something went wrong"
      content={
        <>
          Please{" "}
          <Link href="mailto:support@vanahelp.zendesk.com">email us</Link> with
          details of your login attempt.
        </>
      }
    />
  </>
);

export { Login };
