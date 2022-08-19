// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  DialogVariant,
  styledDialogContent,
  styledDialogOverlay,
  styledTrigger,
} from "src/components";
import { TwCss } from "src/types";

interface Props {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  variant?: DialogVariant;
}

/* 
  Exactly the same as DialogDrawer but passing open and onOpenChnage for manipulation on the parent 
 */

const DialogModalControlled = ({
  buttonNode,
  children,
  open,
  onOpenChange,
  variant,
}: Props) => (
  <Dialog onOpenChange={onOpenChange} open={open}>
    <DialogTrigger asChild css={styledTrigger}>
      {buttonNode}
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay forceMount css={styledDialogOverlay} />
      <DialogContent forceMount css={styledDialogContent({ variant }) as TwCss}>
        {children}
        <DialogCloseButton />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { DialogModalControlled };
