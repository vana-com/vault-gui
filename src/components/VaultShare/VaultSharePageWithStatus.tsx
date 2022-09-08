import { VaultSharePage } from "src/components/VaultShare";
import { ShareUiStatus } from "src/types";

interface Props {
  children: React.ReactNode;
  accessingDomain?: string;
  appName: string;
  uiStatus: ShareUiStatus;
}

const getLede = (uiStatus: ShareUiStatus, appName: string) => {
  switch (uiStatus) {
    case ShareUiStatus.USER_IS_NOT_LOGGED_IN:
      return "You need to log in to grant Vault access";
    case ShareUiStatus.HASURA_IS_LOADING:
      return `Do you want to grant ${appName} access to your Vault?`;
    case ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA:
      return "You do not have the Vault data this application is requesting";
    case ShareUiStatus.USER_HAS_ACCEPTED:
      return `Sharing Vault data to ${appName}`;
    default:
      return appName
        ? `Do you want to grant ${appName} access to your Vault?`
        : "";
  }
};

const VaultSharePageWithStatus = ({
  uiStatus,
  appName,
  accessingDomain,
  children,
}: Props) => {
  const lede = getLede(uiStatus, appName);

  return (
    <VaultSharePage
      accessDomain={accessingDomain}
      heading={
        uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA
          ? "No Vault data"
          : "Grant Vault access"
      }
      lede={lede}
    >
      {children}
    </VaultSharePage>
  );
};

export { VaultSharePageWithStatus };
