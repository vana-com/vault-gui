import { VaultSharePage } from "src/components/VaultShare";
import { ShareUiStatus } from "src/types";

interface Props {
  children: React.ReactNode;
  accessingDomain: string;
  appName: string;
  uiStatus: ShareUiStatus;
}

const VaultSharePageWithStatus = ({
  uiStatus,
  appName,
  children,
  accessingDomain,
}: Props) => {
  const lede = () => {
    if (uiStatus === ShareUiStatus.userIsNotLoggedIn)
      return "You need to Login to give Vault access";
    if (uiStatus === ShareUiStatus.hasuraIsLoading)
      return `Do you want to give ${appName} access to your Vault?`;
    if (uiStatus === ShareUiStatus.userDoesNotHaveModuleData)
      return "You don't have any Vault data to share";
    if (uiStatus === ShareUiStatus.userHasAcceptedRequest)
      return `Sending Vault data to ${appName}`;
    return `Do you want to give ${appName} access to your Vault?`;
  };

  return (
    <VaultSharePage
      accessDomain={accessingDomain}
      heading={
        uiStatus === ShareUiStatus.userDoesNotHaveModuleData
          ? "No Vault data"
          : "Give Vault access"
      }
      lede={lede()}
    >
      {children}
    </VaultSharePage>
  );
};

export { VaultSharePageWithStatus };
