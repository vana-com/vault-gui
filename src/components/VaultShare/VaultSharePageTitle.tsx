import { TitleAndMetaTags } from "src/components";
import { ShareUiStatus } from "src/types";

interface Props {
  uiStatus: ShareUiStatus;
}

const VaultSharePageTitle = ({ uiStatus }: Props) => {
  const title = () => {
    if (uiStatus === ShareUiStatus.userIsNotLoggedIn)
      return "Login to share your Vault";
    if (uiStatus === ShareUiStatus.hasuraIsLoading) return "Loading Vault…";
    if (uiStatus === ShareUiStatus.userDoesNotHaveModuleData)
      return "Add data to your Vault";
    if (uiStatus === ShareUiStatus.userHasAcceptedRequest)
      return "Sharing your Vault data";
    return "Share your Vault data";
  };

  return <TitleAndMetaTags color="black" title={`${title()} | Vana`} />;
};

export { VaultSharePageTitle };
