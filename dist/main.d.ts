import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes } from 'react';
import * as _vanilla_extract_recipes from '@vanilla-extract/recipes';
import { RecipeVariants } from '@vanilla-extract/recipes';

declare const LightButton: _vanilla_extract_recipes.RuntimeFn<{
    variant: {
        primary: {
            vars: {
                [x: string]: string;
            };
        };
        secondary: {
            vars: {
                [x: string]: string;
            };
        };
        tertiary: {
            vars: {
                [x: string]: string;
            };
        };
    };
    size: {
        xlarge: {
            vars: {
                [x: string]: string;
            };
        };
        large: {
            vars: {
                [x: string]: string;
            };
        };
        medium: {
            vars: {
                [x: string]: string;
            };
        };
        small: {
            vars: {
                [x: string]: string;
            };
        };
    };
}>;
type ButtonVariants = RecipeVariants<typeof LightButton>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;
declare function Button({ variant, size, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

type Theme = 'light' | 'dark';
type ThemeSetting = 'system' | 'light' | 'dark';
interface ThemeContext {
    theme: Theme;
    themeSetting: ThemeSetting;
    setTheme: (theme: Theme) => void;
    setThemeSetting: (themeSetting: ThemeSetting) => void;
}
declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare const useTheme: () => ThemeContext;

export { Button, type ButtonProps, type Theme, type ThemeContext, ThemeProvider, type ThemeSetting, useTheme };
