import { Icon } from "@iconify/react";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Stack, Text, WithIcon } from "src/components";

interface Props {
  moduleName: string;
}

const AlertLang = ({ moduleName }: Props) => {
  const [isEnglishAccount, setIsEnglishAccount] = useState(false);

  return (
    <div tw="border border-error rounded-2xl p-inset flex items-center justify-center">
      <Stack tw="gap-3 max-w-xl">
        <Stack tw="gap-0.5">
          <Text variant="heading" tw="text-error flex gap-1 items-center">
            <WithIcon
              prefix={
                <Icon icon="heroicons-solid:exclamation-circle" height="1em" />
              }
            >
              English languages accounts only
            </WithIcon>
          </Text>
          <Text variant="base" tw="text-labelSecondary">
            For the time being, we only service English language accounts. We
            will offer multiple languages in future.
          </Text>
        </Stack>
        <hr />
        <div tw="pt-2">
          {/* <CheckboxDefault
            label={`My ${moduleName} account is in English`}
            handleCheckChanged={() => setIsEnglishAccount(true)}
          /> */}
          <Button
            variant="outline"
            size="lg"
            prefix={<Icon icon="heroicons-solid:check" height="1em" />}
            onClick={() => setIsEnglishAccount(true)}
          >
            My {moduleName} account is in English
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export { AlertLang };
