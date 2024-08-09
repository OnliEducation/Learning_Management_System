import { ChangeEvent, useState } from 'react'
import styles from './Input.module.css'
import { IInput } from './types'

export function Input(props: IInput): JSX.Element {
    const {
        id,
        type = 'text',
        name,
        value,
        onChange,
        onBlur,
        onFocus,
        placeholder,
        className,
        required,
    } = props

    const [inputData, setInputData] = useState<string>('')

    function onChangeinputData(e: ChangeEvent<HTMLInputElement>) {
        setInputData(e.target.value)
    }

    return (
        <input
            id={id}
            name={name}
            className={`${className ? className : ''} ${styles.default} p`}
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