import { setup } from 'twind'
import { colors } from 'css/colors'
import * as twColors from 'twind/colors'
import { theme } from 'twind/css'

export const defaultSans = [
  'system-ui',
  'Helvetica Neue',
  'Arial',
  'Helvetica',
  'sans-serif',
]

const separatorColor = colors.white[100]

// default config
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// screens
// sm: '640px',
// md: '768px',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1536px',

setup({
  theme: {
    extend: {
      colors: {
        gray: {
          custom: '#242331',
        },
        yellow: {
          custom: '#edf060',
        },
        blueGray: twColors.blueGray,
        white: colors.white,
        orange: colors.orange,
        slate: colors.slate,
        separator: separatorColor,
      },
      borderColor: {
        // DEFAULT: theme('colors.gray.200', 'currentColor'),
        DEFAULT: separatorColor,
      },
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        title: ['GintoNord', ...defaultSans],
        sans: ['Ginto', ...defaultSans],
        mono: 'SFMono, ui-monospace, monospace',
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1.5' }],
        sm: ['12px', { lineHeight: '1.5' }],
        base: ['15px', { lineHeight: '1.5' }],
        md: ['17px', { lineHeight: '1.5' }],
        lg: ['20px', { lineHeight: '1.3' }],
        xl: ['24px', { lineHeight: '1.2' }],
        '2xl': ['27px', { lineHeight: '1.1' }],
        '3xl': ['32px', { lineHeight: '1.1' }],
        '4xl': ['40px', { lineHeight: '1.0' }],
        '5xl': ['52px', { lineHeight: '1.0' }],
      },
    },
  },
  preflight: {
    '@font-face': [
      {
        fontFamily: 'Ginto',
        src: 'url(/fonts/Ginto-Regular.woff) format("woff")',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Ginto',
        src: 'url("/fonts/Ginto-Medium.woff") format("woff")',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Ginto',
        src: 'url("/fonts/Ginto-Bold.woff") format("woff")',
        fontStyle: 'normal',
        fontWeight: 700,
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'Ginto',
        src: 'url("/fonts/Ginto-Black.woff") format("woff")',
        fontStyle: 'normal',
        fontWeight: 900,
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'GintoNord',
        src: 'url("/fonts/Ginto-Nord-Bold.woff") format("woff")',
        fontStyle: 'normal',
        fontWeight: 700,
        fontDisplay: 'swap',
      },
      {
        fontFamily: 'GintoNord',
        src: 'url(/fonts/Ginto-Nord-Black.woff) format("woff")',
        fontStyle: 'normal',
        fontWeight: 900,
        fontDisplay: 'swap',
      },
    ],
  },
})
