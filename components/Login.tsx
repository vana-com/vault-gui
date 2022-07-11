import { useEffect, useState } from 'react'
import { Web3Auth } from '@web3auth/web3auth'
import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from '@web3auth/base'

// TODO: [CU-36mezx1] Move Web3Auth variables and secrets to Doppler
const CLIENT_ID =
  'BNCnjvWWetrw0ygWhVsVYc1lNaf_9ZKk3sWSuXK1J2422dNWv9Dvc5vZBO6Jdi_VPSpq9Sa0q381SZzutMpFm3g'
const RPC_TARGET =
  'https://mainnet.infura.io/v3/4e179115341d400baa2bec18fd69d210'
const ETHEREUM_CHAIN_ID = '0x1'
const NETWORK = 'mainnet'

const Login = () => {
  // TODO: Move web3auth and provider to global context
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null)
  const [walletProvider, setWalletProvider] =
    useState<SafeEventEmitterProvider | null>(null)
  const [user, setUser] = useState<unknown | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const subscribeAuthEvents = (web3Auth: Web3Auth) => {
      // Subscribe to ADAPTER_EVENTS. Additional ADAPTER_EVENTS and LOGIN_MODAL_EVENTS exist.
      web3Auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log('adapter successfully logged in', data)
        setUser(data)
        setWalletProvider(web3Auth.provider!)
      })

      web3Auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log('adapter connecting')
      })

      web3Auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log('adapter disconnected')
        setUser(null)
      })

      web3Auth.on(ADAPTER_EVENTS.ERRORED, error => {
        console.error(
          'adapter error or user has cancelled login request',
          error
        )
      })
    }

    const init = async () => {
      const { Web3Auth } = await import('@web3auth/web3auth')
      const { OpenloginAdapter } = await import('@web3auth/openlogin-adapter')

      setIsLoading(true)

      try {
        const web3AuthInstance = new Web3Auth({
          clientId: CLIENT_ID,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: ETHEREUM_CHAIN_ID,
            rpcTarget: RPC_TARGET,
          },
        })

        const adapter = new OpenloginAdapter({
          adapterSettings: { network: NETWORK, clientId: CLIENT_ID },
        })
        web3AuthInstance.configureAdapter(adapter)
        subscribeAuthEvents(web3AuthInstance)
        setWeb3Auth(web3AuthInstance)
        await web3AuthInstance.initModal()
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [])

  const logIn = async () => {
    if (!web3Auth) {
      console.log('web3auth not initialized yet')
      return
    }
    const web3AuthProvider = await web3Auth.connect()
    setWalletProvider(web3AuthProvider)
  }

  const logOut = async () => {
    if (!web3Auth) {
      console.log('web3auth not initialized yet')
      return
    }
    await web3Auth.logout()
    setWalletProvider(null)
  }

  return (
    <>
      {user ? (
        <button onClick={logOut}>Log Out</button>
      ) : (
        <button onClick={logIn}>Log In</button>
      )}
    </>
  )
}

export default Login
