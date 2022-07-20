import {
  CardHeaderVaultModule,
  DeleteData,
  PageVault,
  SpinnerIcon,
  TitleAndMetaTags,
} from "components";
import { testModules } from "data";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import { formatModuleNameFromQueryString } from "utils";

const VaultModulePage: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDeleting, setIsDeleting] = useState(false);

  // query data
  const { "module-name": moduleNameFromQuery } = router.query;
  const moduleName = formatModuleNameFromQueryString(moduleNameFromQuery);

  // tests
  const testDataModule = [testModules.at(-1)];
  const isDataLoading = false;
  const usersModulesForName = testDataModule;

  /**
   * Deletes all files a user has stored for a module (ie. Email integration).
   * See deleteSingleFile comment for how deletion is done.
   */
  const deleteAllModuleFiles = () => {
    console.log("deleteAllModuleFiles");
  };

  return (
    <>
      <TitleAndMetaTags color="black" />

      <PageVault showBackLink>
        <div tw="flex flex-col gap-8 w-full">
          <CardHeaderVaultModule moduleName={moduleName}>
            Vana encrypts your data before storing.
          </CardHeaderVaultModule>
          <hr />

          {isDataLoading ? (
            <SpinnerIcon />
          ) : (
            <div tw="flex flex-col gap-2 items-center">
              {/* <>
                {usersModulesForName.length > 1 &&
                    usersModulesForName?.map(userModule => (
                      <DeleteVaultData
                        key={userModule.id}
                        onDelete={() => deleteSingleFile(userModule.id)}
                        isDeleting={isDeleting}
                        buttonLabel={`Delete ${getFileName(
                          userModule.urlToData
                        )}`}
                      />
                    ))}
              </> */}
              <div css={usersModulesForName?.length < 2 && tw`pt-1`}>
                <DeleteData
                  onDelete={() => deleteAllModuleFiles()}
                  isDeleting={isDeleting}
                  buttonLabel={`Delete all your ${moduleName} data`}
                />
              </div>
            </div>
          )}
        </div>
      </PageVault>
    </>
  );
};

export default VaultModulePage;
