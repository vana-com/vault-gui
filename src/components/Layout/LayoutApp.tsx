import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutShell, LoginLayout, NavAside, Navbar } from "src/components";

import { useUserContext } from "../UserAccess/UserContext";

interface Props {
  children?: React.ReactNode;
}

const LayoutApp = ({ children }: Props) => {
  const { user } = useUserContext();

  // only render UI when the page is mounted on the client
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        css={[tw`bg-background z-[1]`, user && tw`z-[1] fixed left-0 right-0`]}
      >
        <div tw="max-w-[1280px] mx-auto">
          {/* NAVBAR */}
          <Navbar />
        </div>
        <hr />
      </div>
      <div
        css={[tw`max-w-[1280px] mx-auto`, user ? tw`pt-navH` : tw`border-l`]}
      >
        <LayoutShell>
          {/* ASIDE NAV */}
          {user && (
            <LayoutShell.Sidebar>
              <NavAside />
            </LayoutShell.Sidebar>
          )}

          {/* CONTENT */}
          <LayoutShell.Body>
            {user ? children : <LoginLayout />}
          </LayoutShell.Body>
        </LayoutShell>
      </div>
    </>
  );
};

export { LayoutApp };
