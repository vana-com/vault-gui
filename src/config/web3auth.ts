import { OPENLOGIN_NETWORK_TYPE } from "@toruslabs/openlogin";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { OpenloginAdapterOptions } from "@web3auth/openlogin-adapter";
import { ModalConfig, Web3AuthOptions } from "@web3auth/web3auth";

const WEB_3_AUTH_CLIENT_ID = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_CLIENT_ID as string;
const WEB_3_AUTH_RPC_TARGET = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_RPC_TARGET as string;
const WEB_3_AUTH_ETHEREUM_CHAIN_ID = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_ETHEREUM_CHAIN_ID as string;
const WEB_3_AUTH_NETWORK = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_NETWORK as OPENLOGIN_NETWORK_TYPE;

const web3AuthOptions: Web3AuthOptions = {
  uiConfig: {
    appLogo: "https://vault.vana.xyz/vana.svg",
    theme: "dark",
  },
  clientId: WEB_3_AUTH_CLIENT_ID,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: WEB_3_AUTH_ETHEREUM_CHAIN_ID,
    rpcTarget: WEB_3_AUTH_RPC_TARGET,
  },
};

const openLoginAdapterConfig: OpenloginAdapterOptions = {
  adapterSettings: {
    network: WEB_3_AUTH_NETWORK,
    clientId: WEB_3_AUTH_CLIENT_ID,
  },
};

const SSO_OPTIONS_TO_HIDE = [
  "facebook",
  "reddit",
  "discord",
  "wechat",
  "github",
  "linkedin",
  "line",
  "twitch",
  "weibo",
  "kakao",
  "email_passwordless",
];

const openLoginModalConfig: ModalConfig = {
  label: "OpenLogin Adapter",
  loginMethods: Object.assign(
    {},
    ...SSO_OPTIONS_TO_HIDE.map((ssoOptionToHide) => ({
      [ssoOptionToHide]: { showOnModal: false },
    })),
  ),
};

export default {
  web3AuthOptions,
  openLoginAdapterConfig,
  openLoginModalConfig,
};
