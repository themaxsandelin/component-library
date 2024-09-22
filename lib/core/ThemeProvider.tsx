// Dependencies
import { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type ThemeSetting = 'system' | 'light' | 'dark';

export interface ThemeContext {
  theme: Theme;
  themeSetting: ThemeSetting;
  setTheme: (theme: Theme) => void;
  setThemeSetting: (themeSetting: ThemeSetting) => void;
}

const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  themeSetting: 'system',
  setTheme: () => {},
  setThemeSetting: () => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  let initialTheme: Theme = 'light';
  let initialSystemTheme: Theme = 'light';
  let initialSetting: ThemeSetting = 'system';
  if (typeof window !== 'undefined') {
    initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    initialSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const storedSetting = window.localStorage.getItem('theme-setting') as ThemeSetting;
    if (storedSetting) {
      initialSetting = storedSetting;
      if (initialSetting !== 'system') {
        initialTheme = initialSetting;
      }
    }
  }
  const [theme, setInternalTheme] = useState<Theme>(initialTheme);
  const [systemTheme, setInternalSystemTheme] = useState<Theme>(initialSystemTheme);
  const [themeSetting, setInternalThemeSetting] = useState<ThemeSetting>(initialSetting);

  useEffect(() => {
    function matchMediaCallback(e: MediaQueryListEvent) {
      const theme = e.matches ? 'light' : 'dark';
      setInternalSystemTheme(theme);
    }

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', matchMediaCallback);
    return () => {
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', matchMediaCallback);
    };
  }, []);

  useEffect(() => {
    if (themeSetting === 'system') {
      setInternalTheme(systemTheme);
    }
  }, [themeSetting, systemTheme]);

  function setTheme(theme: Theme) {
    setInternalTheme(theme);
  }

  function setThemeSetting(themeSetting: ThemeSetting) {
    setInternalThemeSetting(themeSetting);
    localStorage.setItem('theme-setting', themeSetting);
    if (themeSetting !== 'system') {
      setInternalTheme(themeSetting);
    }
  }


  return (
    <ThemeContext.Provider value={{ theme, themeSetting, setTheme, setThemeSetting }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

