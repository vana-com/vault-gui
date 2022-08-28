import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogContent,
  DialogContentProps,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  styledDialogOverlay,
  styledMotionDiv,
} from "src/components";
import { TwCss } from "src/types";

import * as styles from "./Dialog.css";

interface Props extends DialogContentProps {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
}

const DialogModal = ({
  buttonNode,
  children,
  variant = "full",
  placement = "top",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>{buttonNode}</DialogTrigger>
      <DialogPortal forceMount>
        <AnimatePresence>
          {isOpen ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.125 }}
                css={styledMotionDiv}
              >
                <DialogOverlay
                  forceMount
                  css={styledDialogOverlay({ variant })}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                css={styledMotionDiv}
              >
                <DialogContent
                  forceMount
                  css={[
                    styles.styledDialogContent({ variant, placement }) as TwCss,
                    tw`p-inset`,
                  ]}
                >
                  {children}
                </DialogContent>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
};

export { DialogModal };
