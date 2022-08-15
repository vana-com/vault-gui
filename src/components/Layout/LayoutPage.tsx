// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { LayoutShell, NavAside } from "src/components";

interface Props {
  children?: React.ReactNode;
  showAsAuthenticated?: boolean;
}

/* 
  LayoutPage *always* wraps a page layout and therefore, the parent component of LayoutPage must *always* be LayoutApp (in _app).
  
  If not auth'd, don't show NavAside.
  
  This is not housed within LayoutApp because we need to compose them differently in LayoutLoading (which is always authorised) versus LayoutLoadingNoUser (which is never authorised).
 */

const LayoutPage = ({ children, showAsAuthenticated = true }: Props) => (
  <LayoutShell>
    {showAsAuthenticated && (
      <LayoutShell.Sidebar>
        <NavAside />
      </LayoutShell.Sidebar>
    )}

    <LayoutShell.Body>{children}</LayoutShell.Body>
  </LayoutShell>
);

export { LayoutPage };
