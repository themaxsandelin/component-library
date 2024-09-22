export type Theme = 'light' | 'dark';
export type ThemeSetting = 'system' | 'light' | 'dark';
export interface ThemeContext {
    theme: Theme;
    themeSetting: ThemeSetting;
    setTheme: (theme: Theme) => void;
    setThemeSetting: (themeSetting: ThemeSetting) => void;
}
export default function ThemeProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContext;
