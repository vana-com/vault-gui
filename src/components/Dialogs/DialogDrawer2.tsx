import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "src/components";

import { styledDialogOverlay, styledDialogTrigger } from "./Dialog.css";
import { styledDrawerContent } from "./Drawer.css";

interface Props {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
}

const DialogDrawer2 = ({ buttonNode, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger css={styledDialogTrigger({ isRounded2xl: true })}>
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
};

export { DialogDrawer2 };
