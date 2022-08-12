import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutShell, NavAside, Navbar } from "src/components";

interface Props {
  children?: React.ReactNode;
}

/* General app layout for a logged in user */
const LayoutApp = ({ children }: Props) => {
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
      {/* NAVBAR */}
      <div tw="bg-background z-[1] fixed left-0 right-0">
        <div tw="max-w-[1280px] mx-auto">
          <Navbar />
        </div>
        <hr />
      </div>

      {/* ASIDE NAV & CONTENT */}
      <div tw="max-w-[1280px] mx-auto pt-navH">
        <LayoutShell>
          <LayoutShell.Sidebar>
            <NavAside />
          </LayoutShell.Sidebar>

          <LayoutShell.Body>{children}</LayoutShell.Body>
        </LayoutShell>
      </div>
    </>
  );
};

export { LayoutApp };
