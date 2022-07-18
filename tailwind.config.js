// default config
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// const { fontFamily } = require('tailwindcss/defaultTheme')

// const separatorColor = colors.white[100]

// screens
// sm: '640px',
// md: '768px',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1536px',

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--color-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--color-primary)',
      },
      colors: {
        gray: {
          custom: '#242331',
        },
        yellow: {
          custom: '#edf060',
        },
        // blueGray: twColors.blueGray,
        // white: colors.white,
        // orange: colors.orange,
        // slate: colors.slate,
        // separator: separatorColor,
      },
      // borderColor: {
      //   DEFAULT: theme('colors.gray.200', 'currentColor'),
      // },
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        // title: ['GintoNord', ...fontFamily.sans],
        title: ['GintoNord'],
        sans: ['Inter'],
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
  plugins: [],
}
