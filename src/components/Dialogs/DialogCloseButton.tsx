import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, DialogClose } from "src/components";

const DialogCloseButton = () => (
  <div tw="lg:hidden absolute top-3 right-3">
    <DialogClose asChild>
      <Button variant="icon" tw="text-2xl text-label h-[30px] w-[30px]">
        <Icon icon="carbon:close-filled" />
      </Button>
    </DialogClose>
  </div>
);

export { DialogCloseButton };
