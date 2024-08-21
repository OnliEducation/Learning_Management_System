import { Link } from "react-router-dom";

import styles from './LinkComponent.module.css'
import { ILink } from './types';

export function LinkComponent(props: ILink): JSX.Element {
    const {
        children,
        variant = 'default',
        className,
        to,
    } = props;

    const linkVariant = variant in styles ? styles[variant] : ''; // Types Guard

    return (
        <Link to={to} className={`${className ? className : ''} ${linkVariant} md`}>
            {children}
        </Link>
    )
}
