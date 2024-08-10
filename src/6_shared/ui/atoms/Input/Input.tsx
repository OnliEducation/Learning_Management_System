import { ChangeEvent, useState } from 'react'
import { IInput } from './types'

import styles from './Input.module.css'

export function Input(props: IInput): JSX.Element {
    const {
        variant = 'default',
        type = 'text',
        name,
        value,
        onChange,
        onBlur,
        onFocus,
        placeholder,
        required,
    } = props

    const [inputData, setInputData] = useState<string>('')

    function onChangeinputData(e: ChangeEvent<HTMLInputElement>) {
        setInputData(e.target.value)
    }

    const classInput =  variant === 'default' ? `${styles.default} p` : `${styles.search} sm`;

    return (
        <input
            name={name}
            className={`${classInput}`}
            type={type}
            value={value ?? inputData}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange ?? onChangeinputData}
            required={required}
        />
    )
}