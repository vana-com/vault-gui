// Tailwind default config:
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// const theme = require('tailwindcss/defaultTheme')

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
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        label: 'var(--label)',
        labelSecondary: 'var(--labelSecondary)',
        labelTertiary: 'var(--labelTertiary)',
        labelQuaternary: 'var(--labelQuaternary)',
        labelInverse: 'var(--labelInverse)',
        labelWhite: 'var(--labelWhite)',
        fill: 'var(--fill)',
        fillSecondary: 'var(--fillSecondary)',
        fillElevated: 'var(--fillElevated)',
        background: 'var(--background)',
        backgroundElevated: 'var(--backgroundElevated)',
        backgroundScrim: 'var(--backgroundScrim)',
        neutral: 'var(--neutral)',
        separator: 'var(--separator)',
        gray: {
          10: 'var(--gray10)',
          20: 'var(--gray20)',
          30: 'var(--gray30)',
          40: 'var(--gray40)',
          50: 'var(--gray50)',
          60: 'var(--gray60)',
          70: 'var(--gray70)',
          80: 'var(--gray80)',
          90: 'var(--gray90)',
          100: 'var(--gray100)',
        },
        whites: {
          10: 'var(--white10)',
          20: 'var(--white20)',
          30: 'var(--white30)',
          40: 'var(--white40)',
          50: 'var(--white50)',
          60: 'var(--white60)',
          70: 'var(--white70)',
          80: 'var(--white80)',
          90: 'var(--white90)',
          100: 'var(--white100)',
        }
      },
      // borderColor: {
      //   DEFAULT: theme('colors.separator', 'currentColor'),
      // },
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        // title: ['GintoNord', ...fontFamily.sans],
        title: ['GintoNord'],
        heading: ['Ginto'],
        sans: ['Inter'],
        mono: 'SFMono, ui-monospace, monospace',
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1.5' }],
        sm: ['13px', { lineHeight: '1.5' }],
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
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.separator', 'currentColor'),
    }),
  },
  plugins: [],
}
