import { Link } from "react-router-dom";
import { IHeader } from "../model/types";
import { Input } from "../../../6_shared/ui/atoms/Input";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { LinkComponent } from "../../../6_shared/ui/atoms/LinkComponent";

import styles from "./Header.module.css"

export function Header({ className }: IHeader): JSX.Element {

    return (
        <header className={`${className ? className : ''} ${styles.header}`}>
            <nav className={styles.nav}>
                <ul className={styles.siteList}>
                    <li>
                        <Link className={styles.linkLogo} to={'/'}>
                            <Icon name="logo" size={40} />
                        </Link>
                    </li>
                    <li >
                        <Link className={`${styles.navCategory} md`} to={'/categories'}>
                            Categories
                        </Link>
                    </li>

                    <li className={styles.searchInputContainer}>
                        <Icon className={styles.loupe} name="loupe" size={20} />
                        <Input className={styles.searchInput} variant="search" placeholder="Search courses" />
                    </li>
                </ul>

                <ul className={styles.userList}>
                    <li className={styles.cart}>
                        <Link className={styles.cartLink} to={'/checkout'}>
                            <Icon name="cart" size={24} />
                        </Link>
                    </li>

                    <li className={styles.login}>
                        <LinkComponent variant={'green'} to={'/login'}>
                            Log In
                        </LinkComponent>
                    </li>

                    <li>
                        <LinkComponent variant={'purple'} to={'/sign-up'}>
                            Sign Up
                        </LinkComponent>
                    </li>
                </ul>
            </nav>
        </header>
    )
}