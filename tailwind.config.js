// Tailwind default config:
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// const theme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

const sans = ['ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','sans-serif'];

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
        primaryTint: 'var(--primaryTint)',
        primaryShade: 'var(--primaryShade)',
        newPrimary: '#0061fe',
        accent: 'var(--accent)',
        newAccent: '#dbff00',
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
        backgroundTertiary: 'var(--backgroundTertiary)',
        backgroundScrim: 'var(--backgroundScrim)',
        neutral: 'var(--neutral)',
        neutralDark: 'var(--neutralDark)',
        separator: 'var(--separator)',
        separatorLight: 'var(--separatorLight)',
        hover: 'var(--hover)',
        error: 'var(--error)',
        success: 'var(--success)',
        gray: {
          10: 'var(--gray10)',
          15: "var(--gray15)",
          20: 'var(--gray20)',
          30: 'var(--gray30)',
          40: 'var(--gray40)',
          55: 'var(--gray50)', // avoid clash with TW gray-50
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
        },
        primarys: {
          10: 'var(--orange10)',
          20: 'var(--orange20)',
          30: 'var(--orange30)',
          40: 'var(--orange40)',
          50: 'var(--orange50)',
          60: 'var(--orange60)',
          70: 'var(--orange70)',
          80: 'var(--orange80)',
          90: 'var(--orange90)',
          100: 'var(--orange100)',
        },
        errors: {
          50: 'var(--error50)',
          60: 'var(--error60)',
        },
        successes: colors.emerald,
      },
      // borderColor: {
      //   DEFAULT: theme('colors.separator', 'currentColor'),
      // },
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        heading: ['Sans', ...sans],
        sans: ['Inter',...sans],
        mono: ['IBM Plex Mono','SFMono-Regular','ui-monospace','monospace'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1.5' }],
        sm: ['clamp(12px, 1vw, 13px)', { lineHeight: '1.5' }],
        smPlus: ['clamp(13px, 1vw, 14px)', { lineHeight: '1.5' }],
        base: ['clamp(14px, 1vw, 15px)', { lineHeight: '1.5' }],
        md: ['clamp(15px, 1vw, 16px)', { lineHeight: '1.5' }],
        lg: ['clamp(18px, 1vw, 20px)', { lineHeight: '1.3' }],
        xl: ['clamp(20px, 1vw, 24px)', { lineHeight: '1.2' }],
        '2xl': ['clamp(22px, 1vw, 27px)', { lineHeight: '1.1' }],
        '3xl': ['clamp(26px, 1vw, 32px)', { lineHeight: '1.1' }],
        '4xl': ['clamp(32px, 1vw, 40px)', { lineHeight: '1.0' }],
        '5xl': ['clamp(36px, 1vw, 52px)', { lineHeight: '1.0' }],
        '6xl': ['clamp(48px, 1vw, 72px)', { lineHeight: '1.0' }],
        '7xl': ['clamp(54px, 1vw, 90px)', { lineHeight: '1.0' }],
      },
      // clamp()
      // https://codesandbox.io/s/clamp-linear-intepolation-based-on-viewport-width-builder-forked-c37i3
      // set between 414 thru 1240
      // or, easier: 17px at 1024 wide = 17/1024 = 1.66vw
      spacing: {
        // navH: "clamp(3.5rem, 2.9988rem + 1.9370vw, 4.5rem)",
        // navH: "clamp(3.5rem, 2.9988rem + 1.9370vw, 3.5rem)",
        navH: "56px",
        navHPlusPx: "57px",
        navLinkH: "42px",
        asideW: "210px",
        insetHalf: "clamp(0.75rem, 0.9988rem + 0.9370vw, 1.125rem)",
        insetAlmost: "clamp(1.25rem, 0.9988rem + 1.3370vw, 1.75rem)",
        inset: "clamp(1.5rem, 0.9988rem + 1.9370vw, 2.25rem)",
        insetDouble: "clamp(3rem, 1.9976rem + 3.8741vw, 4.5rem)",
        w2: "clamp(0.25rem, 0.2494rem + 0.9685vw, 0.5rem)",
        w4: "clamp(0.5rem, 0.2494rem + 0.9685vw, 1rem)",
        w6: "clamp(0.75rem, 0.3741rem + 1.4528vw, 1.5rem)",
        w8: "clamp(1rem, 0.4988rem + 1.9370vw, 2rem)",
        w12: "clamp(1.5rem, 0.7482rem + 2.9056vw, 3rem)",
        w16: "clamp(2.5rem, 0.9976rem + 3.8741vw, 4rem)",
        w24: "clamp(3rem, 1.4964rem + 5.8111vw, 6rem)",
        w32: "clamp(3.5rem, 1.2446rem + 8.7167vw, 8rem)",
        w36: "clamp(4rem, 0.4939rem + 9.6852vw, 9rem)",
        w40: "clamp(5rem, 12vw, 10rem)",
        w48: "clamp(6rem, 13vw, 12rem)",
        w64: "clamp(7rem, 2.4891rem + 17.4334vw, 16rem)",
        w72: "clamp(9rem, 19vw, 18rem)",
        w96: "clamp(12rem, 26vw, 24rem)"
      },
      maxWidth: {
        canvasWidth: "1280px",
      }
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.separator', 'currentColor'),
    }),
  },
  plugins: [],
}
