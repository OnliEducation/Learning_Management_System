import { Button } from "../../../6_shared/ui/components/Button";
import { Input } from "../../../6_shared/ui/components/Input";
import { Link } from "react-router-dom";
import Arrow from "../../../6_shared/ui/icons/arrow.svg?react"
import Facebook from "../../../6_shared/ui/icons/facebook.svg?react"
import Google from "../../../6_shared/ui/icons/google.svg?react"
import Microsoft from "../../../6_shared/ui/icons/microsoft.svg?react"
import styles from "./LoginForm.module.css"
import { ILoginForm } from "../model/types";


export function LoginForm({ className }: ILoginForm): JSX.Element {

    return (
        <section className={className ? className + ' ' + styles.mainContainer : styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Sign in to your account</h1>
                <form className={styles.form} action="https://echo.htmlacademy.ru" method="post" target="_blank">
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="username">Email</label>
                        <Input variant="auth"
                            type="text"
                            id="username"
                            name="username or email ID"
                            placeholder="Username or Email ID"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="password">Password</label>
                        <Input variant="auth"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div>
                        <Button type="submit" variant='dark'>
                            <span className={styles.buttonText}>Sign In</span>
                            <Arrow />
                        </Button>
                    </div>
                </form>
                <p className={styles.divider}>Sign in with</p>
                <div className={styles.socialsContainer}>
                    <Link className={styles.social} to={"https://www.facebook.com/"}>
                        <Facebook />
                        <span className={styles.facebookText}>Facebook</span>
                    </Link>

                    <Link className={styles.social} to={"https://www.google.com/"}>
                        <Google />
                        <span className={styles.googleText}>Google</span>
                    </Link>

                    <Link className={styles.social} to={"https://www.microsoft.com/"}>
                        <Microsoft />
                        <span className={styles.microsoftText}>Microsoft</span>
                    </Link>
                </div>
            </div>

            <div className={styles.image}>

            </div>
        </section>
    );
}