import { RecipeVariants } from '@vanilla-extract/recipes';
declare const LightButton: import("@vanilla-extract/recipes").RuntimeFn<{
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
export declare const Button: {
    light: import("@vanilla-extract/recipes").RuntimeFn<{
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
    dark: import("@vanilla-extract/recipes").RuntimeFn<{
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
};
export type ButtonVariants = RecipeVariants<typeof LightButton>;
export {};
