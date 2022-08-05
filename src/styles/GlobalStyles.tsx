import { Global } from "@emotion/react";
import React from "react";
import tw, { css, GlobalStyles as BaseStyles, theme } from "twin.macro";

const stylesBase = css`
  :root {
    --black100: black;
    --white10: #262d31;
    --white20: rgba(245, 248, 255, 0.12);
    --white30: rgba(245, 248, 255, 0.16);
    --white40: rgba(245, 248, 255, 0.2);
    --white50: rgba(245, 248, 255, 0.28);
    --white60: rgba(245, 248, 255, 0.4);
    --white70: rgba(245, 248, 255, 0.56);
    --white80: rgba(245, 248, 255, 0.76);
    --white90: rgba(247, 250, 255, 0.92);
    --white100: white;
    --gray10: #f0f1f5;
    --gray15: #f4f4f5;
    --gray20: rgba(9, 17, 31, 0.06);
    --gray30: rgba(16, 21, 31, 0.1);
    --gray40: rgba(16, 21, 31, 0.16);
    --gray50: rgba(22, 25, 31, 0.24);
    --gray60: rgba(26, 28, 31, 0.36);
    --gray70: rgba(27, 29, 31, 0.5);
    --gray80: rgba(27, 29, 31, 0.7);
    --gray90: rgba(27, 29, 31, 0.88);
    --gray100: black;

    // islands.xyz
    --colors-gray900: #0f0f10;
    --colors-gray800: #151617;
    --colors-gray700: #242628;
    --colors-gray600: #313336;
    --colors-gray500: #414348;
    --colors-gray400: #696c74;
    --colors-gray300: #757981;
    --colors-gray200: #8f939a;
    --colors-gray100: #aaadb2;
    --colors-gray50: #c5c6ca;
    --colors-gray25: #dfe0e2;
    --colors-gray15: #f4f4f5;
    --colors-gray10: #f6f6f6;

    --blueGray10: #f0f1f5;
    --blueGray20: #e6e9f0;
    --blueGray30: #dadee5;
    --blueGray40: #cad0d9;
    --blueGray50: #afb9c7;
    --blueGray60: #929ead;
    --blueGray70: #78828f;
    --blueGray80: #5f6670;
    --blueGray90: #3c4047;
    --blueGray100: #242529;
    --slate90: #2f393f;
    --slate100: #262d31;
    --neutral20: #eeebdc;
    --neutral50: #c2bca0;
    --neutral60: #b9b49e;
    --orange10: #fff6eb;
    --orange20: #ffe7cc;
    --orange30: #ffcf99;
    --orange40: #ffb266;
    --orange50: #ff6800;
    --orange60: #ff801f;
    --orange70: #e06e16;
    --orange80: #ad530e;
    --orange90: #703b12;
    --orange100: #3d1e0a;
    --error50: hsl(1, 62%, 60%);
    --error60: hsl(1deg 62% 44%);
  }
  .light {
    --primary: var(--orange60);
    --accent: var(--white100);

    --label: var(--gray100);
    --labelSecondary: var(--gray80);
    --labelTertiary: var(--gray70);
    --labelQuaternary: var(--gray60);
    --labelInverse: var(--white100);
    --labelWhite: var(--white100);

    --fill: var(--gray30);
    --fillSecondary: var(--gray15);
    --fillElevated: var(--white100);
    --background: var(--white100);
    --backgroundElevated: var(--white90);
    --backgroundTertiary: var(--white70);
    --backgroundScrim: rgba(0, 0, 0, 0.2);

    --neutral: var(--neutral20);
    --separator: var(--gray20);
    --error: var(--error50);
  }
  .dark {
    --primary: var(--orange50);
    --accent: var(--black100);

    --label: var(--white100);
    --labelSecondary: var(--white80);
    --labelTertiary: var(--white70);
    --labelQuaternary: var(--white60);
    --labelInverse: var(--gray100);
    --labelWhite: var(--white100);

    --fill: var(--white30);
    --fillSecondary: var(--white20);
    --fillElevated: var(--blueGray90);
    --background: var(--slate100);
    --backgroundElevated: var(--slate90);
    --backgroundTertiary: var(--gray50);
    --backgroundScrim: rgba(0, 0, 0, 0.4);

    --neutral: var(--neutral60);
    --separator: var(--white20);
    --error: var(--error60);
  }
  body {
    webkittaphighlightcolor: ${theme`colors.purple.500`};
    ${tw`min-h-screen antialiased transition-all duration-150 bg-background text-label`};
  }
  .w3ajs-external-wallet {
    display: none;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={stylesBase} />
  </>
);

export default GlobalStyles;
