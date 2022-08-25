// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogContentProps,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  styledDialogOverlay,
  styledDrawerContent,
  styledTrigger,
} from "src/components";

interface Props extends DialogContentProps {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
}

const DialogDrawer2 = ({ buttonNode, children, variant }: Props) => (
  <Dialog>
    {/* do NOT pass trigger functions via asChild */}
    <DialogTrigger css={[styledTrigger, tw`rounded-2xl`]}>
      {buttonNode}
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay forceMount css={styledDialogOverlay({ variant })} />
      <DialogContent forceMount css={styledDrawerContent}>
        {children}
        <DialogCloseButton />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { DialogDrawer2 };
