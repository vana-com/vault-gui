import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";

export default () => (
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Avatar.Root>…</Avatar.Root>
    </Tooltip.Trigger>
    <Tooltip.Content side="top">
      Tooltip content
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip.Root>
);
