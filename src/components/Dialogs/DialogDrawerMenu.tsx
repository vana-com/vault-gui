import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  styledMotionDiv,
} from "src/components";
import { CarbonAddFilled } from "src/components/Icons";

interface Props {
  buttonLabel: string;
  children: React.ReactNode;
}

const DialogDrawerMenu = ({ buttonLabel = "Add", children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button size="full" variant="outline" prefix={<CarbonAddFilled />}>
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogPortal>
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
                initial={{ x: 540 }}
                exit={{ x: -540 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.25 }}
                css={styledMotionDiv}
              >
                {/* css={styledContent} */}
                <DialogContent
                  forceMount
                  tw="fixed top-0 bottom-0 right-0 z-20 outline-none bg-backgroundElevated p-9 h-full overflow-auto pt-[6vh] min-w-[580px]"
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

export { DialogDrawerMenu };
