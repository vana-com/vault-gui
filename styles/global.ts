import { css, apply, theme } from 'twind/css'

export const globalStyles = css({
  ':global': {
    html: apply`bg-slate-900`,
    body:
      // backgroundColor: vars.colors.backgroundElevated,
      // backgroundColor: "var(--backgroundColor)"
      // color: vars.colors.label,
      // fontSize: '100%',
      apply`font-sans text-[100%] min-h-screen m-0`,
    a: {
      color: '#333',
    },
    '*, ::before, ::after': {
      boxSizing: 'border-box',
    },
    '::selection': {
      backgroundColor: 'var(--selectionColor)',
      // color: vars.colors.labelWhite
      // WebkitTextFillColor: vars.colors.labelWhite,
    },
    'code, pre': {
      fontFamily: 'SFMono, ui-monospace, monospace',
      fontWeight: 400,
      MozOsxFontSmoothing: 'subpixel-antialiased',
      WebkitFontSmoothing: 'subpixel-antialiased',
    },
    svg: {
      verticalAlign: 'middle',
    },
    '[data-emoji]': {
      fontFamily: 'system-ui',
      fontWeight: 400,
    },
  },
})
