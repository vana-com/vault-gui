import { Icon } from "@iconify/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Button,
  CardHeadingModule,
  DataCard,
  DataModuleDetail,
  DialogDrawer,
  Group,
  Stack,
} from "src/components";
import { ptBreadcrumbs } from "src/components/system/Styles";
import { testModules } from "src/data";
import { ModuleObj } from "src/types";

interface Props {
  module: ModuleObj;
  moduleName: string;
  children?: React.ReactNode;
}

const DataModule = ({ module, moduleName, children }: Props) => (
  <DialogDrawer buttonNode={<DataCard module={module} />}>
    <Stack css={[tw`gap-2 px-inset pb-insetAlmost bg-neutral`, ptBreadcrumbs]}>
      <CardHeadingModule
        name={moduleName}
        heading={`${moduleName} data block`}
        variant="title1"
      />
      <DataModuleDetail label="Module ID" alignByWidth={false}>
        {module.id}
      </DataModuleDetail>
    </Stack>
    <Stack tw="px-inset py-insetAlmost gap-insetAlmost">
      <Stack tw="gap-2">
        {/* TODO: pass module details when avalable */}
        <DataModuleDetail label="File name">
          <Group tw="gap-1 items-center">
            {testModules[0].fileName}
            {/* TODO: provide safe download link */}
            <div tw="relative">
              <Button
                // as="a"
                // target="_blank"
                // href={module.urlToData}
                variant="icon"
                tw="text-label absolute top-1/2 transform -translate-y-1/2"
              >
                <Icon icon="carbon:download" />
              </Button>
            </div>
          </Group>
        </DataModuleDetail>
        <DataModuleDetail label="Size">
          {testModules[0].fileSize}
        </DataModuleDetail>
        <DataModuleDetail label="Last updated">
          {testModules[0].lastUpdated}
        </DataModuleDetail>
      </Stack>
      <hr />

      {/* Delete button */}
      {children}
    </Stack>
  </DialogDrawer>
);

export { DataModule };
