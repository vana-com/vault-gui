import type { NextPage } from "next";
// import NextLink from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Container, TitleAndMetaTags } from "src/components";
import { PermissionContract } from "src/components/VaultShare";

const SendPage: NextPage = () => (
  // stuff here soon…

  <>
    <TitleAndMetaTags color="black" title="Send your Vault data | Vana" />

    <div tw="min-h-screen flex items-center justify-center">
      <Container tw="relative" size="lg">
        <PermissionContract />
      </Container>
    </div>
  </>
);

export default SendPage;
