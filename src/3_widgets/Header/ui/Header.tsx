import { Link } from "react-router-dom";
import CartIcon from '../../../6_shared/ui/icons/cart.svg?react';
import LogoIcon from '../../../6_shared/ui/icons/logo.svg?react';

import { IHeader } from "../model/types";
import styles from "./Header.module.css"
import { Input } from "../../../6_shared/ui/atoms/Input";

export function Header({ className }: IHeader): JSX.Element {

    return (
        <header className={className ? className : ''}>
            <nav className={styles.nav}>
                <Link className={styles.linkLogo} to={'/'}>
                    <LogoIcon className={styles.logo} />
                    <span className={styles.textLogo}>Byway</span>
                </Link>

                <ul className={styles.siteList}>
                    <li className={styles.navCategory}>
                        <Link to={'/categories'}>
                            Categories
                        </Link>
                    </li>

                    <li className={styles.searchInputContainer}>
                        <Input className={styles.searchInput} 
                        variant="search"/>
                    </li>

                    <li className={styles.navLink}>
                        <Link to={'/categories'}>
                            Teach on Byway
                        </Link>
                    </li>
                </ul>

                <ul className={styles.userList}>
                    <li className={styles.cart}>
                        <Link className={styles.cartLink} to={'/checkout'}>
                            <CartIcon />
                        </Link>
                    </li>

                    <li className={styles.login}>
                        <Link className={styles.loginLink} to={'/login'}>
                            Log In
                        </Link>
                    </li>

                    <li className={styles.signup}>
                        <Link className={styles.signupLink} to={'/sign-up'}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
