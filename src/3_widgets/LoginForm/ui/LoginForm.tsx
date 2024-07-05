import { Button } from "../../../6_shared/ui/components/Button";
import { Input } from "../../../6_shared/ui/components/Input";
import { Link } from "react-router-dom";
import Arrow from "../../../6_shared/ui/icons/arrow.svg?react"
import Facebook from "../../../6_shared/ui/icons/facebook.svg?react"
import Google from "../../../6_shared/ui/icons/google.svg?react"
import Microsoft from "../../../6_shared/ui/icons/microsoft.svg?react"
import styles from "./LoginForm.module.css"
import { ILoginForm } from "../model/types";

import { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../6_shared/lib/store";
import { signInUser } from "../../../5_entities/Session/model/sessionThunk";


export function LoginForm({ className }: ILoginForm): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { status, error, user, role } = useAppSelector(state => state.session);

    // TODO: изменить тупую типизацию на умную e

    function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    const dispatch = useAppDispatch();

    function handleLogin() {
        dispatch(signInUser({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <section className={className ? className + ' ' + styles.mainContainer : styles.mainContainer}>
            <div className={styles.container}>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {user && <p>Welcome, {user.email}</p>}
                {role && <p>Your role is {role}</p>}
                <h1 className={styles.title}>Sign in to your account</h1>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}> {/*TODO: убрать onSubmit в таком виде*/}
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <Input variant="auth"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            id="email"
                            name="email ID"
                            placeholder="Email ID"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="password">Password</label>
                        <Input variant="auth"
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div>
                        <Button onClick={() => handleLogin()} type="submit" variant='dark'>
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