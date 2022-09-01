// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeadingModule,
  DataCard,
  DataModuleDetail,
  DeleteData,
  DialogDrawer2,
  Group,
  Stack,
} from "src/components";
import { ptBreadcrumbs } from "src/components/system/Styles";
import config from "src/config";
import { ModuleObj } from "src/types";
import { heapTrackServerSide } from "src/utils";

const { HEAP_EVENTS } = config;

interface Props {
  userId: string;
  module: ModuleObj;
  handleDeleteModule: () => void;
  isDeleting: boolean;
}

const DataModule = ({
  userId,
  module,
  handleDeleteModule,
  isDeleting,
}: Props) => (
  <DialogDrawer2 buttonNode={<DataCard module={module} />}>
    <Stack
      css={[
        tw`gap-2 px-inset pb-insetAlmost bg-neutral dark:bg-fillSecondary`,
        ptBreadcrumbs,
      ]}
    >
      <CardHeadingModule
        name={module.module.name}
        heading={`${module.module.name} data block`}
        variant="title1"
      />
      <DataModuleDetail label="Data Block ID" alignByWidth={false}>
        {module.id}
      </DataModuleDetail>
    </Stack>
    <Stack tw="px-inset py-insetAlmost gap-insetAlmost">
      <Stack tw="gap-2">
        {module.fileName ? (
          <DataModuleDetail label="File name">
            <Group tw="gap-1 items-center">
              {module.fileName.slice(0, -4)}
            </Group>
          </DataModuleDetail>
        ) : (
          <></>
        )}
        {module.fileSize ? (
          <DataModuleDetail label="Size">{module.fileSize}</DataModuleDetail>
        ) : (
          <></>
        )}
        {module.createdAt ? (
          <DataModuleDetail label="Last updated">
            {module.createdAt}
          </DataModuleDetail>
        ) : (
          <></>
        )}
      </Stack>
      <hr />

      {/* Delete */}
      <DeleteData
        onDelete={() => {
          heapTrackServerSide(userId, HEAP_EVENTS.DATA_DELETED, {
            module: module?.module?.name,
          });
          handleDeleteModule();
        }}
        isDeleting={isDeleting}
        deletionName="this data block"
        buttonLabel="Delete this data block"
      />
    </Stack>
  </DialogDrawer2>
);

export { DataModule };
