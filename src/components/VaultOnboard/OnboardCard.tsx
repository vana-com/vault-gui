import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from "twin.macro";

import { Button, Center, Flex, Stack, Text } from "src/components";

/* Describe this component */

interface Props {
  card: {
    icon: string;
    heading: string;
    description: string;
  };
  onClick: () => void;
  children?: React.ReactNode;
  isLastCard: boolean;
}

// background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, var(--gray1) 100%)

const OnboardCard = ({ card, onClick, isLastCard, children }: Props) => (
  <Flex tw="flex-col h-full">
    <Flex tw="items-center flex-1 w-full px-inset">
      <Center
        tw="rounded-full w-[80px] h-[80px] ml-2 bg-label"
        // css={[isLastCard ? tw`bg-primary` : tw`bg-label`]}
      >
        <Icon icon={card.icon} tw="text-background" height="1.75em" />
      </Center>
    </Flex>

    <Stack tw="gap-1 px-inset">
      <Text variant="title3" tw="text-label">
        {card.heading}
      </Text>
      <Text variant="base" tw="text-labelSecondary">
        {card.description}
      </Text>
      <div tw="pt-3">
        {isLastCard ? (
          children
        ) : (
          <Button variant="solid" size="lg" onClick={onClick}>
            Continue
          </Button>
        )}
      </div>
    </Stack>
  </Flex>
);

export { OnboardCard };
