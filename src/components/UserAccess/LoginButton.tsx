// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, CarbonSecurity, Link } from "src/components";
import { ToastDefault } from "src/components/Toast";

interface Props {
  logIn?: () => void;
  loginError: boolean;
  isLoading: boolean;
  setLoginError?: () => void;
}

const LoginButton = ({
  logIn,
  isLoading,
  loginError,
  setLoginError,
}: Props) => (
  <>
    <Button
      variant="solid"
      size="md"
      disabled={isLoading}
      prefix={<CarbonSecurity />}
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

export { LoginButton };
