// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  styledDialogOverlay,
  styledDrawerContent,
  styledTrigger,
} from "src/components";

interface Props {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

/* 
  Exactly the same as DialogDrawer but passing open and onOpenChnage for manipulation on the parent 
 */

const DialogDrawerControlled = ({
  buttonNode,
  children,
  open,
  onOpenChange,
}: Props) => (
  <Dialog onOpenChange={onOpenChange} open={open}>
    <DialogTrigger asChild css={styledTrigger}>
      {buttonNode}
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay forceMount css={styledDialogOverlay} />
      <DialogContent forceMount css={styledDrawerContent}>
        {children}
        <DialogCloseButton />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { DialogDrawerControlled };
