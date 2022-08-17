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

const DialogDrawer2 = ({ buttonNode, children }: Props) => (
  <Dialog>
    {/* do NOT pass trigger functions via asChild */}
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

export { DialogDrawer2 };
