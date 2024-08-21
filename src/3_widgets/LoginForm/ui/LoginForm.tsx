import { Button } from "../../../6_shared/ui/atoms/Button";
import { ILoginForm } from "../model/types";
import { useState } from "react";
import { useAppDispatch } from "../../../6_shared/lib/store";
import { fetchCurrentUser } from "../../../5_entities/CurrentUser";
import { signInUser } from "../../../5_entities/Session";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { FormField } from "../../../6_shared/ui/molecules/FormField";
import { ColumnLayout } from "../../../6_shared/ui/templates/ColumnLayout";

import styles from "./LoginForm.module.css"


export function LoginForm({ className }: ILoginForm): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const { status, error, user, role } = useAppSelector(state => state.session);

    const dispatch = useAppDispatch();

    function handleLogin() {
        dispatch(signInUser({ email, password }));
        dispatch(fetchCurrentUser())
        setEmail('');
        setPassword('');
    }

    return (
        <section className={`${className ? className : ''}`}>
            <ColumnLayout
                className={styles.columnContainer}
                variant='equal'
                leftContent={
                    <div className={styles.formWrapper}>
                        {/* {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {user && <p>Welcome, {user.email}</p>}
                {role && <p>Your role is {role}</p>} */}
                        <h1 className='h1'>Sign in to your account</h1>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}> {/*TODO: убрать onSubmit в таком виде*/}
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
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className={styles.button} onClick={() => handleLogin()} type="submit">
                                <span>Sign In</span>
                                <Icon className={styles.icon} name="chevron" size={24} />
                            </Button>
                        </form>
                    </div>
                }
                rightContent={
                    <span className={styles.imgContainer}>
                        <img className={styles.img} src="src/6_shared/ui/images/LoginGirl2.jpg" />
                        {/* <img className={styles.img} src="src/6_shared/ui/images/SignUp.jpg" /> */}
                    </span>
                }
            />
        </section>
    );
}