import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Box, BoxProps, Button } from "components";
import { vars } from "css/vars.css";
import { useState } from "react";
import { CarbonAddFilled } from "components/Icons";
import * as styles from "./DrawerMenu.css";
import { styledMotionDiv } from "./Motion.css";
import { AnimatePresence, motion } from "framer-motion";

interface Props extends BoxProps {
  buttonLabel: string;
}

const DrawerMenu = ({ buttonLabel = "Add", children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root onOpenChange={setIsOpen} open={isOpen}>
      <Box>
        <DialogPrimitive.Trigger asChild>
          <Button
            size="l"
            variant="outline"
            prefix={<CarbonAddFilled />}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "1",
            }}
          >
            {buttonLabel}
          </Button>
        </DialogPrimitive.Trigger>
      </Box>
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
                    // zIndex: 11,
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 540 }}
                exit={{ x: -540 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.25 }}
                className={styledMotionDiv}
              >
                <DialogPrimitive.Content
                  forceMount
                  asChild
                  className={styles.styledContent}
                >
                  <Box
                    backgroundColor="fillElevated"
                    padding="9"
                    style={{
                      height: "100%",
                      overflow: "auto",
                      paddingTop: "6vh",
                    }}
                  >
                    {children}
                  </Box>
                </DialogPrimitive.Content>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { DrawerMenu };
