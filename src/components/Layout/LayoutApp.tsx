import { useAtom } from "jotai";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Login, NavAside, Navbar, Shell } from "src/components";
import { userAtom } from "src/state";

interface Props {
  children?: React.ReactNode;
}

const LayoutApp = ({ children }: Props) => {
  // only render UI when the page is mounted on the client
  const [mounted, setMounted] = useState(false);
  const [user] = useAtom(userAtom);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div tw="z-10 left-0 right-0 fixed bg-background">
        <div tw="max-w-[1280px] mx-auto">
          {/* NAVBAR */}
          <Navbar />
        </div>
        <hr />
      </div>
      <div tw="max-w-[1280px] mx-auto pt-navH">
        <Shell>
          {/* ASIDE NAV */}
          <Shell.Sidebar>
            <NavAside />
          </Shell.Sidebar>

          {/* CONTENT */}
          <Shell.Body>
            {/* TECH DEBT: we'll refactor useEffect vs Markup in Login soon */}
            <Login withLayout={!user} />

            {children}
          </Shell.Body>
        </Shell>
      </div>
    </>
  );
};

export { LayoutApp };
