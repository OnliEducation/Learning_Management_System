import { ISignUp } from "../model/types";
import { Input } from "../../../6_shared/ui/atoms/Input";
import { Button } from "../../../6_shared/ui/atoms/Button";
import { Link } from "react-router-dom";
// import Facebook from "../../../6_shared/ui/icons/facebook.svg?react"
// import Google from "../../../6_shared/ui/icons/google.svg?react"
// import Microsoft from "../../../6_shared/ui/icons/microsoft.svg?react"
// import Arrow from "../../../6_shared/ui/icons/arrow.svg?react"
import styles from "./SignUpForm.module.css"

import { useAppDispatch } from "../../../6_shared/lib/store";
import { signUpUser } from "../../../5_entities/Session/model/sessionThunk";
import { createRegisterData } from "../../../5_entities/User/model/userThunk";
import { useState } from "react";

export function SignUpForm({ className }: ISignUp): JSX.Element {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useAppDispatch();

    async function handleSignUp() {
        await dispatch(signUpUser({ email, password }));
        await dispatch(createRegisterData({ firstName, lastName, userName }));
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
                            <Input className={styles.inputFirstName} variant='auth' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="first-name" name="first-name" placeholder="First Name" required />
                        </div>
                        <div className={styles.wrappperLastName}>
                            <label className="visually-hidden" htmlFor="last-name">Last Name</label>
                            <Input className={styles.inputLastName} variant='auth' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                        </div>
                    </fieldset>

                    <fieldset className={styles.groupContact}>
                        <legend className="visually-hidden">Contact Information</legend>
                        <div className={styles.wrappperUsername}>
                            <label className={styles.label} htmlFor="username">Username</label>
                            <Input variant='auth' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username" placeholder="Username" required />
                        </div>
                        <div className={styles.wrappperEmail}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <Input variant='auth' value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Email ID" required />
                        </div>
                    </fieldset>

                    <fieldset className={styles.groupPassword}>
                        <legend className="visually-hidden">Password</legend>
                        <div className={styles.wrappperPassword}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <Input className={styles.inputPassword} variant='auth' value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div className={styles.wrappperConfirmPassword}>
                            <label className={styles.label} htmlFor="confirm-password">Confirm Password</label>
                            <Input className={styles.inputConfirmPassword} variant='auth' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                        </div>
                    </fieldset>

                    <Button className={styles.button} variant='dark' type="submit" onClick={() => handleSignUp()}>
                        <span>Create Account</span>
                        {/* <Arrow /> */}
                    </Button>
                </form>

                <div className="social-signup">
                    <p className={styles.divider}>Sign up with</p>
                    <div className={styles.socialsContainer}>
                        <Link className={styles.social} to={"https://www.facebook.com/"}>
                            {/* <Facebook /> */}
                            <span className={styles.facebookText}>Facebook</span>
                        </Link>

                        <Link className={styles.social} to={"https://www.google.com/"}>
                            {/* <Google /> */}
                            <span className={styles.googleText}>Google</span>
                        </Link>

                        <Link className={styles.social} to={"https://www.microsoft.com/"}>
                            {/* <Microsoft /> */}
                            <span className={styles.microsoftText}>Microsoft</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}