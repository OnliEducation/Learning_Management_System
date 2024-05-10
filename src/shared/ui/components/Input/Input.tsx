import { ChangeEvent, useState } from 'react'
import styles from './Input.module.css'
import { IInput } from './types'

export function Input(props: IInput): JSX.Element {
    const {
        value,
        onChange,
        onBlur,
        onFocus,
        placeholder = 'Search courses',
        variant = 'default',
        className,
    } = props

    const inputVariant = variant in styles ? styles[variant] : ''; // Types Guard

    const [inputData, setinputData] = useState<string>('')

    function onChangeinputData(e: ChangeEvent<HTMLInputElement>) {
        setinputData(e.target.value)
    }

    return (
        <input
            className={className ? className + ' ' + inputVariant : inputVariant}
            type='text'
            value={value ?? inputData}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange ?? onChangeinputData}
        />
    )
}