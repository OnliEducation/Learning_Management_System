import { LoginForm } from "../../3_widgets/LoginForm";

import styles from "./Login.module.css"

export function Login() {
    return (
        <LoginForm className={styles.form} />
    )
}