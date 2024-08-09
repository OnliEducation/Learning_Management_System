import { Input } from "../../atoms/Input";
import { IFormField } from "./types";
import styles from "./FormField.module.css"

export function FormField(props: IFormField) {
    const {
        className,
        variant,
        label,
        type,
        name,
        required,
        value,
        onChange,
    } = props;

    return (
        <label className={`${className ? className : ''} ${styles.formField}`} >
            <span className={variant}>{label}</span>
            <Input
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}