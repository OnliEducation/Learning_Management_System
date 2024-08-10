import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
    readonly variant?: 'default' | 'dark' | 'transparent';
}