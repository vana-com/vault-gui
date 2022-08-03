import { CHAIN_NAMESPACES } from "@web3auth/base";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";

const WEB_3_AUTH_CLIENT_ID = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_CLIENT_ID as string;
const WEB_3_AUTH_RPC_TARGET = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_RPC_TARGET as string;
const WEB_3_AUTH_ETHEREUM_CHAIN_ID = process.env
  .NEXT_PUBLIC_WEB_3_AUTH_ETHEREUM_CHAIN_ID as string;
const WEB_3_AUTH_NETWORK = process.env.NEXT_PUBLIC_WEB_3_AUTH_NETWORK as string;

// function is needed to dynamically import Web3Auth libraries that will error out
// if document object is undefined
function initWeb3Auth() {
  if (typeof window !== "undefined") {
    /* eslint-disable */
    const { Web3Auth } = require("@web3auth/web3auth");
    const { OpenloginAdapter } = require("@web3auth/openlogin-adapter");
    /* eslint-enable */
    try {
      const web3AuthInstance = new Web3Auth({
        uiConfig: {
          appLogo: "https://vault.vana.xyz/vana-favicon.svg",
          theme: "dark",
        },
        clientId: WEB_3_AUTH_CLIENT_ID,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: WEB_3_AUTH_ETHEREUM_CHAIN_ID,
          rpcTarget: WEB_3_AUTH_RPC_TARGET,
        },
      });

      const web3AuthAdapter = new OpenloginAdapter({
        adapterSettings: {
          network: WEB_3_AUTH_NETWORK,
          clientId: WEB_3_AUTH_CLIENT_ID,
        },
      });
      web3AuthInstance.configureAdapter(web3AuthAdapter);

      const metamaskAdapter = new MetamaskAdapter();
      web3AuthInstance.configureAdapter(metamaskAdapter);

      return [web3AuthInstance, web3AuthAdapter];
    } catch (error: any) {
      console.log(error.toString());
      console.log("Unable to initialize Web3Auth");
      return [undefined, undefined];
    }
  }

  return [undefined, undefined];
}

const [web3AuthInstance, web3AuthAdapter] = initWeb3Auth();

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

const openLoginModalConfig = {
  name: "Vana Login",
  loginMethods: Object.assign(
    {},
    ...SSO_OPTIONS_TO_HIDE.map((ssoOptionToHide) => ({
      [ssoOptionToHide]: { showOnModal: false },
    })),
  ),
};

export default {
  web3AuthInstance,
  web3AuthAdapter,
  SSO_OPTIONS_TO_HIDE,
  openLoginModalConfig,
};
