// Dependencies
import { ButtonHTMLAttributes } from 'react';

// Hooks
import { useTheme } from '../../core/ThemeProvider';

// Styles
import * as styles from './Button.css';
import { ButtonVariants } from './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export default function Button({ variant, size, children, ...props }: ButtonProps) {
  const { theme } = useTheme();

  return <button className={styles.Button[theme]({ variant, size })} {...props}>{children}</button>;
}