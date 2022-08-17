import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { NavAsideContent, Navbar, NavMobile, Stack } from "src/components";

interface Props {
  children?: React.ReactNode;
  renderNavMobile: boolean;
}

/* 
  General app layout for a logged in user.
  NB! The Child component must *always* be LayoutPage.
 */

const LayoutApp = ({ children, renderNavMobile }: Props) => {
  const router = useRouter();
  const isSendPath = router.pathname === "/send";

  const [ref, { width }] = useMeasure();
  const [isMobile, setIsMobile] = useState(false);
  console.log("LayoutApp isMobile", isMobile);

  // setIsMobile once only on initial page load
  useEffect(() => {
    if (width < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <>
      {/* NAVBAR */}
      {!isSendPath && (
        <div ref={ref} tw="fixed top-0 left-0 right-0 bg-background">
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
          !isSendPath && tw`pt-navHPlusPx`,
        ]}
      >
        {children}
      </div>

      {/* MOBILE NAV */}
      {renderNavMobile && !isSendPath && isMobile && (
        <div tw="fixed bottom-inset right-0">
          <div tw="px-inset h-navH">
            <NavMobile align="end" alignOffset={0} side="top" sideOffset={9}>
              <Stack tw="gap-7">
                <NavAsideContent />
              </Stack>
            </NavMobile>
          </div>
        </div>
      )}
    </>
  );
};

export { LayoutApp };
