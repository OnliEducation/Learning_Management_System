import {InputHTMLAttributes} from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    /** Additional styles. */
    readonly variant?: 'default' | 'auth'
}