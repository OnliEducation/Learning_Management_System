import styles from './Button.module.css'
import { IButton } from './types';

export function Button(props: IButton): JSX.Element {
    const {
        children,
        type = 'button',
        variant = 'default',
        onClick,
        className,
    } = props;

    const buttonVariant = variant in styles ? styles[variant] : ''; // Types Guard

    return (
        <button
            type={type}
            onClick={onClick}
            className={className ? `${className} ${buttonVariant} md` : `${buttonVariant} md`}
        >
            {children}
        </ button>
    )
}