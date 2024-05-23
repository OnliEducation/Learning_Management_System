import { Link } from "react-router-dom";
import CartIcon from '../../../../shared/ui/icons/cart.svg?react';

import styles from "./styles.module.css"

export function Cart() {
    return (
        <Link className={styles.icon} to={'/checkout'}>
            <CartIcon />
        </Link>
    )
}