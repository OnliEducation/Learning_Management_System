import { ISignUp } from "../model/types";
import { Button } from "../../../6_shared/ui/atoms/Button";
import { useAppDispatch } from "../../../6_shared/lib/store";
import { createUser } from "../../../5_entities/CurrentUser";
import { useState } from "react";
import { signUpUser } from "../../../5_entities/Session";
import { FormField } from "../../../6_shared/ui/molecules/FormField";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { ColumnLayout } from "../../../6_shared/ui/templates/ColumnLayout";

import styles from "./SignUpForm.module.css"

export function SignUpForm({ className }: ISignUp): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    async function handleSignUp() {
        await dispatch(signUpUser({ name, email, password }));
        await dispatch(createUser());
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <section className={`${className ? className : ''}`}>
            <ColumnLayout
                className={styles.columnContainer}
                variant='equal'
                leftContent={
                    <span className={styles.imgContainer}>
                        <img className={styles.img} src="src/6_shared/ui/images/SignUp.jpg" />
                    </span>
                }
                rightContent={
                    <div className={styles.formWrapper}>
                        <h1 className='h1'>Create Your Account</h1>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <FormField
                                className={styles.formField}
                                label="Name"
                                variant='default'
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <FormField
                                className={styles.formField}
                                label="Email"
                                variant='default'
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormField
                                className={styles.formField}
                                label="Password"
                                variant='default'
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className={styles.button} type="submit" onClick={() => handleSignUp()}>
                                <span>Create Account</span>
                                <Icon className={styles.icon} name="chevron" size={24} />
                            </Button>
                        </form>
                    </div>
                }
            />
        </section>
    )
}