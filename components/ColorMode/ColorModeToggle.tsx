// import { ColorModeContext, Theme } from './ColorModeContext'
import { useTheme } from "next-themes";
import React from "react";
import tw from "twin.macro";

export const ColorModeToggle = () => {
  // const { theme, setTheme }: Theme = React.useContext(ColorModeContext)
  const { theme, setTheme } = useTheme();

  function isDark() {
    return theme === "dark";
  }

  return (
    <div tw="fixed top-8 right-8 z-10">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        tw="focus:outline-none fill-current text-label hover:text-labelSecondary bg-backgroundElevated p-3 rounded-lg"
        onClick={() => setTheme(isDark() ? "light" : "dark")}
      >
        <div tw="w-4 h-4">{isDark() ? <Moon /> : <Sun />}</div>
      </button>
    </div>
  );
};

const Sun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93v-.001zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121v-.001zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
  </svg>
);

const Moon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.977 6.977 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
  </svg>
);
