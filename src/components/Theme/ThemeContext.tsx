import { createContext, useContext, useEffect, useRef } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: React.MutableRefObject<Theme | null>;
  toggle: () => void;
};

//Don't need to export the context, as a custom hook will be created

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  } else {
    throw new Error("Component should be placed inside ThemeContextProvider");
  }
};

export const getMode = () => {
  if (window.matchMedia) {
    const matchesLightMode = window.matchMedia(
      "(prefers-color-scheme: light"
    ).matches;
    return matchesLightMode ? Theme.LIGHT : Theme.DARK;
  }
  return null;
};

/*Exercise: Replace the state with refs */

const removeDarkClass = () => {
  document.body.classList.remove("dark");
};

const addDarkClass = () => {
  document.body.classList.add("dark");
};

const useTheme = () => {
  //const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const theme = useRef<Theme | null>(getMode());

  useEffect(() => {
    const themeMode = getMode();
    if (themeMode === Theme.DARK) {
      addDarkClass();
    } else {
      removeDarkClass();
    }
    const handleSkinChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        removeDarkClass();
      } else {
        addDarkClass();
      }
    };

    let query: MediaQueryList;
    if (themeMode !== null) {
      query = window.matchMedia("(prefers-color-scheme: light");
      query.addEventListener("change", handleSkinChange);
    }
    return () => {
      query?.removeEventListener("change", handleSkinChange);
    };
  }, []);

  const toggle = () => {
    if (theme.current === Theme.DARK) {
      //setTheme(Theme.LIGHT);
      theme.current = Theme.LIGHT;
      removeDarkClass();
    } else {
      //setTheme(Theme.DARK);
      theme.current = Theme.DARK;
      addDarkClass();
    }
  };

  return { theme, toggle };
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
