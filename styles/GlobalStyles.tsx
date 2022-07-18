import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const stylesBase = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }
  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --color-primary: #2563eb;
  }
  body {
    "WebkitTapHighlightColor": ${theme`colors.purple.500`};
    ${tw`antialiased transition-all duration-200 bg-primary text-primary`};
  }
`

// css object method
const customStyles = css({
  '.light': {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f1f5f9',
  },
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased transition-all duration-200 bg-primary text-primary`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={stylesBase} />
  </>
)

export default GlobalStyles
