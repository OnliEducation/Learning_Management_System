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
                    <Link className={styles.navCategory} to={'/categories'}>
                        Categories
                    </Link>
                    <div className={styles.searchInputContainer}>
                        <Input className={styles.searchInput} />
                    </div>
                    <Link className={styles.navLink} to={'/categories'}>
                        Teach on Byway
                    </Link>
                </ul>

                <ul className={styles.userList}>
                    <Link className={styles.cart} to={'/checkout'}>
                        <CartIcon />
                    </Link>
                    <Link className={styles.login} to={'/login'}>
                        Log In
                    </Link>
                    <Link className={styles.signup} to={'/signup'}>
                        Sign Up
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
