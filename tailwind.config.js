// Tailwind default config:
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// const theme = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

const sans = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "sans-serif",
];
const serif = [
  "ui-serif",
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

// screens
// sm: '640px',
// md: '768px',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1536px',

module.exports = {
  darkMode: 'class',
   content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/ff5351
        orangeRed: {
          500: "#ff5351",
        },
        // https://coolors.co/dbff0a
        chartreuse: {
          500: "#dbff0a",
        },
        // https://coolors.co/0075ff
        blueCrayola: {
          500: "#0075ff",
        },
        // https://coolors.co/ffe0b3
        navajo: {
          500: "#ffe0b3",
        },
        errors: {
          50: 'var(--error50)',
          60: 'var(--error60)',
        },
        blackShadow: {
          50: 'rgb(0 0 0 / 0.04)',
        },
        successes: colors.emerald,
      },
      // borderColor: {
      //   DEFAULT: theme('colors.separator', 'currentColor'),
      // },
      screens: {
        mobile: { max: "640px" },
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        sans: ['Sans', ...sans],
        serif: ['Sharif', ...serif],
        display: ['Display', ...serif],
        mono: ['IBM Plex Mono','SFMono-Regular','ui-monospace','monospace'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1.5' }],
        sm: ['clamp(12px, 1vw, 13px)', { lineHeight: '1.5' }],
        smPlus: ['clamp(13px, 1vw, 14px)', { lineHeight: '1.5' }],
        base: ['clamp(14px, 1vw, 15px)', { lineHeight: '1.5' }],
        md: ['clamp(14px, 1vw, 16px)', { lineHeight: '1.5' }],
        lg: ['clamp(17px, 1vw, 20px)', { lineHeight: '1.3' }],
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
        navLinkH: "clamp(36px, 2.0620rem + 0.7264vw, 42px)",
        rowItem: "clamp(38px, 2.1870rem + 0.7264vw, 44px)",
        asideW: "210px",
        inputH: "clamp(2.5rem, 2vw, 3rem)",
        inputLgH: "clamp(3rem, 2vw, 3.375rem)",
        inputXlH: "clamp(3.5rem, 3vw, 4.5rem)",
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
        canvasWidth: "1284px",
        // canvasWidth: "1180px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        slider: "0 0 0 5px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        // Dropdown menu
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // Navigation menu
        "enter-from-right": {
          "0%": { transform: "translateX(200px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "enter-from-left": {
          "0%": { transform: "translateX(-200px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "exit-to-right": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(200px)", opacity: 0 },
        },
        "exit-to-left": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-200px)", opacity: 0 },
        },
        "scale-in-content": {
          "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
        },
        "scale-out-content": {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
          "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        // Toast
        "toast-hide": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "toast-slide-in-right": {
          "0%": { transform: `translateX(calc(100% + 1rem))` },
          "100%": { transform: "translateX(0)" },
        },
        "toast-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "toast-swipe-out": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
      },
      animation: {
        // Dropdown menu
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Navigation menu
        "enter-from-right": "enter-from-right 0.25s ease",
        "enter-from-left": "enter-from-left 0.25s ease",
        "exit-to-right": "exit-to-right 0.25s ease",
        "exit-to-left": "exit-to-left 0.25s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        "fade-in": "fade-in 0.2s ease",
        "fade-out": "fade-out 0.2s ease",
        // Toast
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right":
          "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom":
          "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
      },
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.separator', 'currentColor'),
    }),
  },
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  plugins: [require("tailwindcss-radix")()],
}
