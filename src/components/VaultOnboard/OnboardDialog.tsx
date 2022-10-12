import { Icon } from "@iconify/react";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  DialogModalControlled,
  Onboard,
  useUserContext,
} from "src/components";
import config from "src/config";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

const OnboardDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  return (
    <DialogModalControlled
      open={isOpen}
      onOpenChange={(_open) => {
        setIsOpen(_open);

        // If the user closes the modal (by clicking outside, using esc key) before completing
        if (!_open && user) {
          heapTrackServerSide(
            user?.id,
            HEAP_EVENTS.CLICK_ONBOARDING_EXIT_EARLY,
          );
        }
      }}
      variant="onboard"
      placement="center"
      buttonNode={
        <Button
          size="md"
          variant="ghost"
          tw="gap-1 md:gap-2 font-normal text-labelSecondary focus:text-label"
          prefix={<Icon icon="carbon:information" />}
          onClick={() => {
            setIsOpen(true);
            heapTrackServerSide(user?.id, HEAP_EVENTS.CLICK_LETS_GET_STARTED);
          }}
        >
          How does this work?
        </Button>
      }
    >
      <Onboard>
        {/* When the Onboard carousel is at the last card, Onboard children shows (ie. this button). We use children to change the button function at this point, so it closes the Onboard Dialog and leads the user to add data. */}
        <Button
          variant="solid"
          size="lg"
          onClick={() => {
            setIsOpen(false);
            heapTrackServerSide(user?.id, HEAP_EVENTS.CLICK_HOW_DOES_THIS_WORK);
          }}
          suffix={<Icon icon="carbon:arrow-right" />}
        >
          Let&apos;s get started
        </Button>
      </Onboard>
    </DialogModalControlled>
  );
};

export { OnboardDialog };
