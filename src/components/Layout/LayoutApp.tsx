import { useAtom } from "jotai";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutShell, Login, NavAside, Navbar } from "src/components";
import { userAtom } from "src/state";

interface Props {
  children?: React.ReactNode;
}

const LayoutApp = ({ children }: Props) => {
  const [user] = useAtom(userAtom);

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
      <div tw="z-[1] left-0 right-0 fixed bg-background">
        <div tw="max-w-[1280px] mx-auto">
          {/* NAVBAR */}
          <Navbar />
        </div>
        <hr />
      </div>
      <div css={[tw`max-w-[1280px] mx-auto pt-navH`, !user && tw`border-l`]}>
        <LayoutShell>
          {/* ASIDE NAV */}
          {user && (
            <LayoutShell.Sidebar>
              <NavAside />
            </LayoutShell.Sidebar>
          )}

          {/* CONTENT */}
          <LayoutShell.Body>
            {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
            <Login withLayout />

            {children}
          </LayoutShell.Body>
        </LayoutShell>
      </div>
    </>
  );
};

export { LayoutApp };
