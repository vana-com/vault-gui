import { useField } from "formik";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Input, Stack, Text } from "src/components";
import { CarbonCheckmarkOutline } from "src/components/Icons";

import { StoragePasswordLabel } from "./index";

/* CURRENTLY NOT IN USE */

const StoragePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleInputClick = () => setShowPassword(!showPassword);

  // pass Formik useField the input name we wish to use
  const [field, meta] = useField("password");

  return (
    <div>
      <Stack tw="border rounded-md overflow-hidden dark:border-gray-30">
        <StoragePasswordLabel />
        {/* TODO: fix this */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label tw="flex bg-whites-20 items-center relative select-none">
          <Input
            variant="base"
            color="black"
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            tw="w-full bg-transparent flex-1 py-4 px-4"
            {...field}
            // onChange={(e) => setShowRecentTransactions(e.target.checked)}
          />
          <div tw="w-auto pr-2">
            <Button
              size="sm"
              variant="ghostSecondary"
              tw="h-[1.75rem] bg-gray-20 text-gray-80"
              prefix={
                meta.touched &&
                !meta.error && (
                  <CarbonCheckmarkOutline
                    height="1.666em"
                    width="1.666em"
                    color="test.500"
                  />
                )
              }
              onClick={handleInputClick}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </div>
        </label>
      </Stack>

      <Text
        variant="note"
        weight="semibold"
        css={[
          tw`mt-1.5`,
          meta.error ? tw`text-red-500` : tw`text-labelSecondary`,
        ]}
      >
        {meta.error ? `${meta.error}. ` : null}
        <span tw="font-medium">
          Use at least 10 characters with a number and a special character.
        </span>
      </Text>
    </div>
  );
};

export { StoragePassword };
