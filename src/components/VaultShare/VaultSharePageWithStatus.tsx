import { VaultSharePage } from "src/components/VaultShare";
import { ShareUiStatus } from "src/types";

interface Props {
  children: React.ReactNode;
  accessingDomain?: string;
  appName: string;
  uiStatus: ShareUiStatus;
}

const VaultSharePageWithStatus = ({
  uiStatus,
  appName,
  accessingDomain,
  children,
}: Props) => {
  let lede = appName
    ? `Do you want to give ${appName} access to your Vault?`
    : "";
  if (uiStatus === ShareUiStatus.USER_IS_NOT_LOGGED_IN)
    lede = "You need to log in to give Vault access";
  if (uiStatus === ShareUiStatus.HASURA_IS_LOADING)
    lede = `Do you want to give ${appName} access to your Vault?`;
  if (uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA)
    lede = "You don't have any Vault data to share";
  if (uiStatus === ShareUiStatus.USER_HAS_ACCEPTED)
    lede = `Sending Vault data to ${appName}`;

  return (
    <VaultSharePage
      accessDomain={accessingDomain}
      heading={
        uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA
          ? "No Vault data"
          : "Give Vault access"
      }
      lede={lede}
    >
      {children}
    </VaultSharePage>
  );
};

export { VaultSharePageWithStatus };
