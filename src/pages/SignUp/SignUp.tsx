import { Header } from "../../widgets/Header";
import { SignUpForm } from "../../widgets/SignUpForm";
import styles from "./SignUp.module.css"


export function SignUp() {
    return (
        <>
            <Header className={styles.container} />
            <SignUpForm className={styles.form} />
        </>
    )
}