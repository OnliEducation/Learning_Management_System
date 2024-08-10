import { Input } from "../../atoms/Input";
import { IFormField } from "./types";
import styles from "./FormField.module.css"

export function FormField(props: IFormField) {
    const {
        className,
        variant = 'default',
        label,
        type,
        name,
        required,
        value,
        onChange,
        onBlur,
        onFocus,
        placeholder,
    } = props;

    const classSpan = variant === 'default' ? 'md' : 'visually-hidden';

    return (
        <label className={`${className ? className : ''} ${styles.formField}`} >
            <span className={classSpan}>{label}</span>
            <Input
                variant={variant}
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={placeholder}
            />
        </label>
    )
}