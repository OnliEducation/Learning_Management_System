import { Link } from "react-router-dom";
import LogoIcon from '../../../../shared/ui/icons/logo.svg?react';

import styles from "./styles.module.css"

export function Logo() {
    return (
        <Link className={styles.logo} to={'/homepage'}>
            <LogoIcon className={styles.icon} />
            <span className={styles.text}>Byway</span>
        </Link>
    )
}