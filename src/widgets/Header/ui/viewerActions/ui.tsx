import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { Cart } from "../cart"

export function ViewerActions() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <Cart />
                <Link className={styles.login} to={'/login'}>
                    Log In
                </Link>
                <Link className={styles.signup} to={'/signup'}>
                    Sign Up
                </Link>
            </ul>
        </div>
    )
}