import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Navbar } from "src/components";

interface Props {
  children?: React.ReactNode;
}

/* 
  General app layout for a logged in user.
  NB! The Child component must *always* be LayoutPage.
 */

const LayoutApp = ({ children }: Props) => {
  const router = useRouter();
  const sendPath = router.pathname === "/send";

  return (
    <>
      {/* NAVBAR */}
      {!sendPath && (
        <div tw="fixed top-0 left-0 right-0 bg-background">
          <div tw="mx-auto max-w-canvasWidth">
            <Navbar />
          </div>
          <hr />
        </div>
      )}

      {/* CONTENT */}
      <div
        css={[
          tw`flex flex-col mx-auto max-w-canvasWidth`,
          !sendPath && tw`pt-navHPlusPx`,
        ]}
      >
        {children}
      </div>
    </>
  );
};

export { LayoutApp };
