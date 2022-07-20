import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "components";
import { CarbonAddFilled } from "components/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { styledMotionDiv } from "./Motion.css";

interface Props {
  buttonLabel: string;
  children: React.ReactNode;
}

const DrawerMenu = ({ buttonLabel = "Add", children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root onOpenChange={setIsOpen} open={isOpen}>
      <DialogPrimitive.Trigger asChild>
        <Button size="full" variant="outline" prefix={<CarbonAddFilled />}>
          {buttonLabel}
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
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
                <DialogPrimitive.Overlay
                  forceMount
                  tw="fixed inset-0 bg-backgroundScrim backdrop-blur-sm"
                />
              </motion.div>
              <motion.div
                initial={{ x: 540 }}
                exit={{ x: -540 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.25 }}
                css={styledMotionDiv}
              >
                {/* css={styledContent} */}
                <DialogPrimitive.Content
                  forceMount
                  asChild
                  tw="fixed top-0 bottom-0 right-0 z-20 outline-none"
                >
                  <div tw="bg-backgroundElevated p-9 h-full overflow-auto pt-[6vh]">
                    {children}
                  </div>
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
