import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Box, BoxProps } from 'components'
// import { vars } from "css/vars.css";
import { useState } from 'react'
import * as styles from './Dialog.css'
import { AnimatePresence, motion } from 'framer-motion'
import { styledMotionDiv } from './Motion.css'
import tw from 'twin.macro'

interface Props extends BoxProps {
  buttonSlot: React.ReactNode
}

const Dialog = ({ buttonSlot, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

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
                css={styledMotionDiv}
              >
                <DialogPrimitive.Overlay
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
                <DialogPrimitive.Content
                  forceMount
                  asChild
                  css={styles.styledDialogContent}
                >
                  {children}
                </DialogPrimitive.Content>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { Dialog }
