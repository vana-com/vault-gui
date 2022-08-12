// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutShell, Navbar } from "src/components";

interface Props {
  children?: React.ReactNode;
}

/* Almost the exact same Layout as LayoutApp but adjusted Login */
const LayoutAppNoAside = ({ children }: Props) => (
  <>
    {/* Don't fix it so that the web3Auth modal sits above everything */}
    <div tw="bg-background z-[1]">
      <div tw="max-w-[1280px] mx-auto">
        <Navbar />
      </div>
      <hr />
    </div>

    <div tw="max-w-[1280px] mx-auto border-l">
      <LayoutShell>
        <LayoutShell.Body>{children}</LayoutShell.Body>
      </LayoutShell>
    </div>
  </>
);

export { LayoutAppNoAside };
