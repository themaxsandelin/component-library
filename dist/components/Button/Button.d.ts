import { ButtonHTMLAttributes } from 'react';
import { ButtonVariants } from './Button.css';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {};
export default function Button({ variant, size, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
