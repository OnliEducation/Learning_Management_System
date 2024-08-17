import { ISignUp } from "../model/types";
import { Input } from "../../../6_shared/ui/atoms/Input";
import { Button } from "../../../6_shared/ui/atoms/Button";
// import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css"

import { useAppDispatch } from "../../../6_shared/lib/store";
import { createUser } from "../../../5_entities/CurrentUser";

import { useState } from "react";
import { signUpUser } from "../../../5_entities/Session";

export function SignUpForm({ className }: ISignUp): JSX.Element {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useAppDispatch();

    async function handleSignUp() {
        await dispatch(signUpUser({ name: firstName, email, password })); // TODO исправить
        await dispatch(createUser());
        setFirstName('');
        setLastName('');
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <section className={className ? styles.content + ' ' + className : styles.content}>
            <div className={styles.banner}></div>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Create Your Account</h1>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <fieldset className={styles.groupPersonal}>
                        <legend className="visually-hidden">Personal Information</legend>
                        <p className={styles.label}>Full Name</p>
                        <div className={styles.wrappperFirstName}>
                            <label className="visually-hidden" htmlFor="first-name">First Name</label>
                            <Input variant='default' className={styles.inputFirstName}  value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="first-name" name="first-name" placeholder="First Name" required />
                        </div>
                        <div className={styles.wrappperLastName}>
                            <label className="visually-hidden" htmlFor="last-name">Last Name</label>
                            <Input variant='default' className={styles.inputLastName} value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                        </div>
                    </fieldset>

                    <fieldset className={styles.groupContact}>
                        <legend className="visually-hidden">Contact Information</legend>
                        <div className={styles.wrappperUsername}>
                            <label className={styles.label} htmlFor="username">Username</label>
                            <Input variant='default' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username" placeholder="Username" required />
                        </div>
                        <div className={styles.wrappperEmail}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <Input variant='default' value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Email ID" required />
                        </div>
                    </fieldset>

                    <fieldset className={styles.groupPassword}>
                        <legend className="visually-hidden">Password</legend>
                        <div className={styles.wrappperPassword}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <Input variant='default' className={styles.inputPassword} value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div className={styles.wrappperConfirmPassword}>
                            <label className={styles.label} htmlFor="confirm-password">Confirm Password</label>
                            <Input variant='default' className={styles.inputConfirmPassword}  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                        </div>
                    </fieldset>

                    <Button className={styles.button}  type="submit" onClick={() => handleSignUp()}>
                        <span>Create Account</span>
                        {/* <Arrow /> */}
                    </Button>
                </form>
            </div>
        </section>
    )
}