import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ColorModeToggle } from '../components'
import GlobalStyles from '../styles/GlobalStyles'
import '../styles/fonts.css'

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <GlobalStyles />
      <div tw="relative">
        <ColorModeToggle />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
)

export default App
