import { Header } from "../../widgets/Header";
import { LoginForm } from "../../widgets/LoginForm";

import styles from "./Login.module.css"

export function Login() {
    return (
        <>
            <Header className={styles.header} />
            <div className={styles.container}>
                <LoginForm />
            </div>
        </>
    )
}