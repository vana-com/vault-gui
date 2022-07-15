// import '../css/globals.css'
import type { AppProps } from 'next/app'
// import withTwindApp from '@twind/next/app'
import withTwindApp from '@twind/next/shim/app'
import twindConfig from '../twind.config'
import { tw } from 'twind'
import { globalStyles } from 'css/global'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component className={tw(globalStyles)} {...pageProps} />
}

export default withTwindApp(twindConfig, MyApp)
