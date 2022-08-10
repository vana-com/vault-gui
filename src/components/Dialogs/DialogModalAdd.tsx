import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  DialogVariant,
  styledMotionDiv,
} from "src/components";

import * as styles from "./Dialog.css";

interface Props {
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  variant?: DialogVariant;
}

const DialogModalAdd = ({ buttonNode, children, variant = "full" }: Props) => {
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
                  tw="fixed inset-0 bg-backgroundScrim backdrop-blur-sm"
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
                  css={styles.styledDialogContent({ variant })}
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

export { DialogModalAdd };
