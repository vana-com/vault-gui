import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, DialogModalControlled, Onboard } from "src/components";

interface Props {
  showOnboarding: boolean;
  setShowOnboarding: (showOnboarding: boolean) => void;
}

const OnboardInDialog = ({ showOnboarding, setShowOnboarding }: Props) => (
  <>
    <DialogModalControlled
      onOpenChange={setShowOnboarding}
      open={showOnboarding}
      variant="onboard"
      placement="center"
      buttonNode={
        <Button
          size="md"
          variant="ghost"
          tw="gap-2 font-normal text-labelSecondary focus:text-label"
          prefix={<Icon icon="carbon:information" />}
          onClick={() => setShowOnboarding(true)}
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
          onClick={() => setShowOnboarding(false)}
          suffix={<Icon icon="carbon:arrow-right" />}
        >
          Let&apos;s get started
        </Button>
      </Onboard>
    </DialogModalControlled>
  </>
);

export { OnboardInDialog };
