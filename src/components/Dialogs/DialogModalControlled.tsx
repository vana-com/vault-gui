// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogAnimationVariant,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  DialogVariant,
  styledDialogContent,
  styledDialogContentOnboard,
  styledDialogOverlay,
  styledTrigger,
} from "src/components";
import { TwCss } from "src/types";

interface Props {
  animationVariant?: DialogAnimationVariant;
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  isOnboardStyle?: boolean;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  variant?: DialogVariant;
}

/* 
  Exactly the same as DialogDrawer but passing open and onOpenChnage for manipulation on the parent 
 */

const DialogModalControlled = ({
  animationVariant,
  buttonNode,
  children,
  isOnboardStyle,
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
      <DialogContent
        forceMount
        css={
          isOnboardStyle
            ? styledDialogContentOnboard({
                variant,
                animationVariant,
              })
            : (styledDialogContent({
                variant,
                animationVariant,
              }) as TwCss)
        }
      >
        {children}
        <DialogCloseButton />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

export { DialogModalControlled };
