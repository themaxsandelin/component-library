// Dependencies
import { style, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const fontSize = createVar();
const height = createVar();
const padding = createVar();

const backgroundColor = createVar();
const backgroundColorHover = createVar();
const backgroundColorActive = createVar();
const backgroundColorDisabled = createVar();

const color = createVar();
const colorHover = createVar();
const colorActive = createVar();
const colorDisabled = createVar();

const borderColor = createVar();
const borderColorHover = createVar();
const borderColorActive = createVar();
const borderColorDisabled = createVar();

const sizes = {
  xlarge: {
    vars: {
      [height]: '48px',
      [padding]: '0 24px',
      [fontSize]: '18px',
    }
  },
  large: {
    vars: {
      [height]: '40px',
      [padding]: '0 16px',
      [fontSize]: '16px',
    }
  },
  medium: {
    vars: {
      [height]: '32px',
      [padding]: '0 12px',
      [fontSize]: '14px',
    }
  },
  small: {
    vars: {
      [height]: '24px',
      [padding]: '0 8px',
      [fontSize]: '12px',
    }
  },
};

const base = style({
  backgroundColor,
  height,
  padding,
  fontSize,
  borderColor,
  color,
  fontWeight: 500,
  fontFamily: '"Inter", sans-serif',
  outline: 'none',
  appearance: 'none',
  borderRadius: '4px',
  borderWidth: '2px',
  borderStyle: 'solid',
  transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
  ':hover': {
    backgroundColor: backgroundColorHover,
    borderColor: borderColorHover,
    color: colorHover,
  },
  ':active': {
    backgroundColor: backgroundColorActive,
    borderColor: borderColorActive,
    color: colorActive,
  },
  ':disabled': {
    backgroundColor: backgroundColorDisabled,
    borderColor: borderColorDisabled,
    color: colorDisabled,
  },
});

const LightButton = recipe({
  base,
  variants: {
    variant: {
      primary: {
        vars: {
          [backgroundColor]: '#06C094',
          [backgroundColorHover]: '#049F7A',
          [backgroundColorActive]: '#036F55',
          [backgroundColorDisabled]: '#DFECE9',
          [borderColor]: 'transparent',
          [borderColorHover]: 'transparent',
          [borderColorActive]: 'transparent',
          [borderColorDisabled]: 'transparent',
          [color]: '#fff',
          [colorHover]: '#fff',
          [colorActive]: '#fff',
          [colorDisabled]: '#9DACA8',
        }
      },
      secondary: {
        vars: {
          [backgroundColor]: 'transparent',
          [backgroundColorHover]: 'rgba(4, 159, 122, 0.1)',
          [backgroundColorActive]: '#036F55',
          [backgroundColorDisabled]: '#DFECE9',
          [borderColor]: '#06C094',
          [borderColorHover]: '#049F7A',
          [borderColorActive]: '#036F55',
          [borderColorDisabled]: '#DFECE9',
          [color]: '#06C094',
          [colorHover]: '#049F7A',
          [colorActive]: '#FFFFFF',
          [colorDisabled]: '#9DACA8',
        }
      },
      tertiary: {
        vars: {
          [backgroundColor]: 'transparent',
          [backgroundColorHover]: 'rgba(4, 159, 122, 0.1)',
          [backgroundColorActive]: '#036F55',
          [backgroundColorDisabled]: '#DFECE9',
          [borderColor]: 'transparent',
          [borderColorHover]: 'transparent',
          [borderColorActive]: 'transparent',
          [borderColorDisabled]: 'transparent',
          [color]: '#06C094',
          [colorHover]: '#049F7A',
          [colorActive]: '#fff',
          [colorDisabled]: '#9DACA8',
        }
      },
    },
    size: sizes,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const DarkButton = recipe({
  base,
  variants: {
    variant: {
      primary: {
        vars: {
          [backgroundColor]: '#00A17A',
          [backgroundColorHover]: '#008061',
          [backgroundColorActive]: '#005D47',
          [backgroundColorDisabled]: '#313534',
          [borderColor]: 'transparent',
          [borderColorHover]: 'transparent',
          [borderColorActive]: 'transparent',
          [borderColorDisabled]: 'transparent',
          [color]: '#fff',
          [colorHover]: '#fff',
          [colorActive]: '#fff',
          [colorDisabled]: '#88918F',
        }
      },
      secondary: {
        vars: {
          [backgroundColor]: 'transparent',
          [backgroundColorHover]: 'rgba(0, 128, 97, 0.1)',
          [backgroundColorActive]: '#005D47',
          [backgroundColorDisabled]: '#313534',
          [borderColor]: '#00A17A',
          [borderColorHover]: '#008061',
          [borderColorActive]: '#005D47',
          [borderColorDisabled]: '#313534',
          [color]: '#00A17A',
          [colorHover]: '#008061',
          [colorActive]: '#FFFFFF',
          [colorDisabled]: '#88918F',
        }
      },
      tertiary: {
        vars: {
          [backgroundColor]: 'transparent',
          [backgroundColorHover]: 'rgba(0, 128, 97, 0.1)',
          [backgroundColorActive]: '#005D47',
          [backgroundColorDisabled]: '#313534',
          [borderColor]: 'transparent',
          [borderColorHover]: 'transparent',
          [borderColorActive]: 'transparent',
          [borderColorDisabled]: 'transparent',
          [color]: '#00A17A',
          [colorHover]: '#00A17A',
          [colorActive]: '#fff',
          [colorDisabled]: '#88918F',
        }
      },
    },
    size: sizes,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Button = {
  light: LightButton,
  dark: DarkButton,
};

export type ButtonVariants = RecipeVariants<typeof LightButton>;