import { ChangeEvent, useState } from 'react'
import styles from './SearchInput.module.css'
import { ISearchInput } from './types'

export function SearchInput(props: ISearchInput): JSX.Element {
    const {
        id,
        type = 'text',
        name,
        value,
        onChange,
        onBlur,
        onFocus,
        placeholder = 'Search courses',
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
            className={`${className ? className : ''} ${styles.input} sm`}
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