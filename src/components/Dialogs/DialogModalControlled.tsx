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
  styledDialogContent,
  styledDialogOverlay,
  styledTrigger,
} from "src/components";
import { TwCss } from "src/types";

interface Props extends DialogContentProps {
  buttonNode?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

/* 
  Exactly the same as DialogDrawer but passing open and onOpenChange for manipulation on the parent 
 */

const DialogModalControlled = ({
  buttonNode,
  children,
  open,
  onOpenChange,
  placement,
  variant,
}: Props) => (
  <Dialog onOpenChange={onOpenChange} open={open}>
    <DialogTrigger asChild css={styledTrigger}>
      {buttonNode}
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay forceMount css={styledDialogOverlay({ variant })} />
      <DialogContent
        forceMount
        css={
          styledDialogContent({
            variant,
            placement,
          }) as TwCss
        }
      >
        {children}
        <DialogCloseButton />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { DialogModalControlled };
