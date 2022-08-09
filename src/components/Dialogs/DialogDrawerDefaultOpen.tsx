// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "src/components";
import { ptBreadcrumbs } from "src/components/system/Styles";

interface Props {
  children: React.ReactNode;
}

const DialogDrawerDefaultOpen = ({ children }: Props) => (
  <Dialog defaultOpen>
    <DialogPortal>
      <DialogOverlay
        forceMount
        tw="fixed inset-0 bg-backgroundScrim backdrop-blur-sm"
      />

      <DialogContent
        forceMount
        css={[
          tw`fixed top-0 bottom-0 right-0 z-20 outline-none bg-background p-inset h-full overflow-auto max-w-[640px]`,
          ptBreadcrumbs,
        ]}
      >
        {children}
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { DialogDrawerDefaultOpen };
