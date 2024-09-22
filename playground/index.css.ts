// Dependencies
import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const backgroundColor = createVar();

export const Page = recipe({
  base: {
    width: '100vw',
    height: '100vh',
    backgroundColor
  },
  variants: {
    theme: {
      light: {
        vars: {
          [backgroundColor]: 'white'
        }
      },
      dark: {
        vars: {
          [backgroundColor]: '#111D1A'
        }
      }
    }
  }
});
