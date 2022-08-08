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
    --gray10: #F0F1F5;
    --gray20: rgba(9, 17, 31, 0.06);
    --gray30: rgba(16, 21, 31, 0.1);
    --gray40: rgba(16, 21, 31, 0.16);
    --gray50: rgba(22, 25, 31, 0.24);
    --gray60: rgba(26, 28, 31, 0.36);
    --gray70: rgba(27, 29, 31, 0.5);
    --gray80: rgba(27, 29, 31, 0.7);
    --gray90: rgba(27, 29, 31, 0.88);
    --gray100: black;
    --blueGray10: #F0F1F5;
    --blueGray20: #E6E9F0;
    --blueGray30: #DADEE5;
    --blueGray40: #CAD0D9;
    --blueGray50: #AFB9C7;
    --blueGray60: #929EAD;
    --blueGray70: #78828F;
    --blueGray80: #5F6670;
    --blueGray90: #3C4047;
    --blueGray100: #242529;
    --slate90: #2f393f;
    --slate100: #262d31;
    --neutral20: #eeebdc;
    --neutral50: #c2bca0;
    --neutral60: #b9b49e;
    --orange10: #FFF6EB;
    --orange20: #FFE7CC;
    --orange30: #FFCF99;
    --orange40: #FFB266;
    --orange50: #ff6800;
    --orange60: #FF801F;
    --orange70: #E06E16;
    --orange80: #AD530E;
    --orange90: #703B12;
    --orange100: #3D1E0A;
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
    --fillSecondary: var(--gray20);
    --fillElevated: var(--white100);
    --background: var(--blueGray10);
    --backgroundElevated: var(--white100);
    --backgroundTertiary: var(--white70);
    --backgroundScrim: rgba(0, 0, 0, 0.2);
    
    --neutral: var(--neutral20);
    --separator: var(--gray30);
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
    "WebkitTapHighlightColor": ${theme`colors.purple.500`};
    ${tw`min-h-screen antialiased transition-all duration-150 bg-background text-label`};
  }
  :disabled, [disabled] {
    opacity: 0.6;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={stylesBase} />
  </>
);

export default GlobalStyles;
