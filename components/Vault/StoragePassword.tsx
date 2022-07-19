import { Box, BoxProps, Flex, Button, Text } from "components";
import { CarbonCheckmarkOutline } from "components/Icons";
import { StoragePasswordLabel } from "./index";
import { useField } from "formik";
import { useState } from "react";

// TODO: types for VE + Formik merged props…
const StoragePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleInputClick = () => setShowPassword(!showPassword);

  // pass useField the input name we wish to use
  const [field, meta] = useField("password");

  return (
    <>
      <StoragePasswordLabel />
      <Flex color="background" backgroundColor="label" alignItems="center">
        <Box as="label" position="relative" style={{ userSelect: "none" }}>
          <Box
            as="input"
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            {...field}
            // onChange={(e) => setShowRecentTransactions(e.target.checked)}
          />
          <Box width="auto" paddingRight="2">
            {meta.touched && !meta.error && (
              <Box paddingRight="2">
                <CarbonCheckmarkOutline
                  height="1.666em"
                  width="1.666em"
                  color="test.500"
                />
              </Box>
            )}
            <Button
              // h="1.75rem"
              // size="sm"
              // fontFamily="body"
              // borderRadius="2px"
              // colorScheme="gray"
              onClick={handleInputClick}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </Box>
        </Box>

        {/* OLD */}
        {/* <Input
          colorScheme="gray"
          borderColor="slate.slate8"
          borderRadius="md"
          borderTopRadius={0}
          fontFamily="body"
          fontSize="base"
          height="44px"
          px={2.5}
          _placeholder={{
            opacity: 1,
            color: "slate.slate9",
          }}
          _hover={{
            borderColor: "slate.slate9",
          }}
          _focus={{
            borderColor: "test.600",
            boxShadow: `0 0 0 1px ${theme.colors.test[600]}`,
          }}
          placeholder="Create password"
          type={showPassword ? "text" : "password"}
          {...field}
          {...props}
        /> */}
      </Flex>

      <Text
        marginTop="2"
        variant="note"
        weight="semibold"
        style={{
          color: meta.error ? "red" : "gray90",
        }}
      >
        {meta.error ? `${meta.error}. ` : null}
        <Text as="span" weight="medium">
          Use at least 10 characters with a number and a special character.
        </Text>
      </Text>
    </>
  );
};

export { StoragePassword };
