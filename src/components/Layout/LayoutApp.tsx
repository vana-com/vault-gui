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

const LayoutApp = ({ children }: Props) => (
  <>
    {/* NAVBAR */}
    <div tw="fixed top-0 left-0 right-0 bg-background">
      <div tw="max-w-[1280px] mx-auto">
        <Navbar />
      </div>
      <hr />
    </div>

    {/* CONTENT */}
    <div tw="max-w-[1280px] mx-auto pt-navHPlusPx flex flex-col">
      {children}
    </div>
  </>
);

export { LayoutApp };
