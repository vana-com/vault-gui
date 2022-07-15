import { CHAIN_NAMESPACES } from '@web3auth/base'

// TODO: [CU-36mezx1] Move Web3Auth variables and secrets to Doppler
const WEB_3_AUTH_CLIENT_ID =
  'BNCnjvWWetrw0ygWhVsVYc1lNaf_9ZKk3sWSuXK1J2422dNWv9Dvc5vZBO6Jdi_VPSpq9Sa0q381SZzutMpFm3g'
const WEB_3_AUTH_RPC_TARGET =
  'https://mainnet.infura.io/v3/4e179115341d400baa2bec18fd69d210'
const WEB_3_AUTH_ETHEREUM_CHAIN_ID = '0x1'
const WEB_3_AUTH_NETWORK = 'mainnet'

// function is needed to dynamically import Web3Auth libraries that will error out
// if document object is undefined
function initWeb3Auth() {
  if (typeof window !== 'undefined') {
    const { Web3Auth } = require('@web3auth/web3auth')
    const { OpenloginAdapter } = require('@web3auth/openlogin-adapter')
    try {
      const web3AuthInstance = new Web3Auth({
        clientId: WEB_3_AUTH_CLIENT_ID,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: WEB_3_AUTH_ETHEREUM_CHAIN_ID,
          rpcTarget: WEB_3_AUTH_RPC_TARGET,
        },
      })

      const web3AuthAdapter = new OpenloginAdapter({
        adapterSettings: {
          network: WEB_3_AUTH_NETWORK,
          clientId: WEB_3_AUTH_CLIENT_ID,
        },
      })
      web3AuthInstance.configureAdapter(web3AuthAdapter)
      return [web3AuthInstance, web3AuthAdapter]
    } catch (error: any) {
      console.log(error.toString())
      console.log('Unable to initialize Web3Auth')
      return [undefined, undefined]
    }
  }

  return [undefined, undefined]
}

const [web3AuthInstance, web3AuthAdapter] = initWeb3Auth()

export default {
  // Web3Auth
  web3AuthInstance,
  web3AuthAdapter,
}
