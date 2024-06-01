import { Link } from "react-router-dom";
import CartIcon from '../../../shared/ui/icons/cart.svg?react';
import LogoIcon from '../../../shared/ui/icons/logo.svg?react';

import { IHeader } from "../model/types";
import { Input } from "../../../shared/ui/components/Input";
import styles from "./Header.module.css"

export function Header({ className }: IHeader): JSX.Element {

    return (
        <header className={className ? className : ''}>
            <nav className={styles.nav}>
                <Link className={styles.linkLogo} to={'/homepage'}>
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
                        <Input className={styles.searchInput} />
                    </li>

                    <li className={styles.navLink}>
                        <Link to={'/categories'}>
                            Teach on Byway
                        </Link>
                    </li>
                </ul>

                <ul className={styles.userList}>
                    <li className={styles.cart}>
                        <Link  to={'/checkout'}>
                            <CartIcon />
                        </Link>
                    </li>

                    <li className={styles.login}>
                        <Link  to={'/login'}>
                            Log In
                        </Link>
                    </li>

                    <li className={styles.signup}>
                        <Link  to={'/signup'}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
