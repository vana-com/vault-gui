import { TitleAndMetaTags } from "src/components";
import { ShareUiStatus } from "src/types";

interface Props {
  uiStatus: ShareUiStatus;
}

const VaultSharePageTitle = ({ uiStatus }: Props) => {
  const title = () => {
    if (uiStatus === ShareUiStatus.USER_IS_NOT_LOGGED_IN)
      return "Log in to share your Vault";
    if (uiStatus === ShareUiStatus.HASURA_IS_LOADING) return "Loading Vault…";
    if (uiStatus === ShareUiStatus.USER_DOES_NOT_HAVE_MODULE_DATA)
      return "Add data to your Vault";
    if (uiStatus === ShareUiStatus.USER_HAS_ACCEPTED)
      return "Sharing your Vault data";
    return "Share your Vault data";
  };

  return <TitleAndMetaTags color="black" title={`${title()} | Vana`} />;
};

export { VaultSharePageTitle };
