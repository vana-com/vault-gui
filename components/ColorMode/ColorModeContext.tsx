import React from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "dark";
};

export type Theme = "light" | "dark";

interface Props {
  children: React.ReactNode;
  initialTheme: Theme;
  theme: Theme;
}

const ColorModeContext = React.createContext<Theme>("light");

const ColorModeProvider = ({ initialTheme, children }: Props) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ColorModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext, ColorModeProvider };
