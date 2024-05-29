import { FormEvent, useState } from "react";
import { Button } from "../../../shared/ui/components/Button";
import { Input } from "../../../shared/ui/components/Input";
import { Link } from "react-router-dom";
import Arrow from "../../../shared/ui/icons/arrow.svg?react"
import Facebook from "../../../shared/ui/icons/facebook.svg?react"
import Google from "../../../shared/ui/icons/google.svg?react"
import Microsoft from "../../../shared/ui/icons/microsoft.svg?react"
import styles from "./LoginForm.module.css"


export function LoginForm(): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!username || !password) {
            alert('Please fill in both fields.');
            return;
        }

        console.log(username, password)
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Sign in to your account</h1>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel} htmlFor="username">Email</label>
                    <Input variant="auth"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username or Email ID"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel} htmlFor="password">Password</label>
                    <Input variant="auth"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
        </section>
    );
}