import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutShell, NavAside, Navbar, useUserContext } from "src/components";

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

  // NB! While there is case to break up this layout based on user styles, it's much simpler to keep all LayoutApp styles & layout in one place.
  return (
    <>
      {/* NAVBAR */}
      <div
        css={[tw`bg-background z-[1]`, user && tw`z-[1] fixed left-0 right-0`]}
      >
        <div tw="max-w-[1280px] mx-auto">
          <Navbar />
        </div>
        <hr />
      </div>

      {/* ASIDE + CONTENT */}
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
          <LayoutShell.Body>{children}</LayoutShell.Body>
        </LayoutShell>
      </div>
    </>
  );
};

export { LayoutApp };
