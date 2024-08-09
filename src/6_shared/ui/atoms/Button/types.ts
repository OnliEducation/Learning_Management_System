import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
    readonly children: React.ReactNode | string
    readonly disabled?: boolean
    readonly variant?: 'default' | 'dark' | 'transparent';
    readonly onClick?: () => void
}