import { InputHTMLAttributes } from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    /** Styles option for input. */
    variant: 'default' | 'search';
}