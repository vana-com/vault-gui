import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, DialogModalControlled, Onboard } from "src/components";

/* 
  OnboardDialogControlled is the same as OnboardDialog 
  except that it is programmtically opened by the parent component.
  No button required, so no Heap tracking here.
 */

interface Props {
  showOnboarding: boolean;
  setShowOnboarding: (showOnboarding: boolean) => void;
  setHasSeenOnboarding: () => void;
}

const OnboardDialogControlled = ({
  showOnboarding,
  setShowOnboarding,
  setHasSeenOnboarding,
}: Props) => (
  <>
    <DialogModalControlled
      open={showOnboarding}
      onOpenChange={(isOpen) => {
        setShowOnboarding(isOpen);
        if (!isOpen) {
          setHasSeenOnboarding();
        }
      }}
      variant="onboard"
      placement="center"
    >
      <Onboard>
        {/* When the Onboard carousel is at the last card, Onboard children shows (ie. this button). We use children to change the button function at this point, so it closes the Onboard Dialog and leads the user to add data. */}
        <Button
          variant="solid"
          size="lg"
          onClick={() => {
            setShowOnboarding(false);
            setHasSeenOnboarding();
          }}
          suffix={<Icon icon="carbon:arrow-right" />}
        >
          Let&apos;s get started
        </Button>
      </Onboard>
    </DialogModalControlled>
  </>
);

export { OnboardDialogControlled };
