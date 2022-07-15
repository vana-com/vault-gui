import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Box, BoxProps } from "components";
import { vars } from "css/vars.css";
import { useState } from "react";
import * as styles from "./Dialog.css";
import { AnimatePresence, motion } from "framer-motion";
import { styledMotionDiv } from "./Motion.css";

interface Props extends BoxProps {
  buttonSlot: React.ReactNode;
}

const Dialog = ({ buttonSlot, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root onOpenChange={setIsOpen} open={isOpen}>
      <DialogPrimitive.Trigger asChild>{buttonSlot}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <AnimatePresence>
          {isOpen ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.125 }}
                className={styledMotionDiv}
              >
                <DialogPrimitive.Overlay
                  forceMount
                  style={{
                    // backdropFilter: "blur(4px)",
                    backgroundColor: vars.colors.backgroundScrim,
                    inset: 0,
                    position: "fixed",
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className={styledMotionDiv}
              >
                <DialogPrimitive.Content
                  forceMount
                  asChild
                  className={styles.styledContent}
                  style={{
                    overflow: "auto",
                  }}
                >
                  <Box padding="9">{children}</Box>
                </DialogPrimitive.Content>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog };
