import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { IHeader } from "../model/types";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { LinkComponent } from "../../../6_shared/ui/atoms/LinkComponent";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../6_shared/lib/store";
import { signOutUser } from "../../../5_entities/Session/model/sessionThunk";
import { Button } from "../../../6_shared/ui/atoms/Button";
import { cleanCurrentUser } from "../../../5_entities/CurrentUser";
import { FormField } from "../../../6_shared/ui/molecules/FormField";

export function Header({ className }: IHeader): JSX.Element {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.session.user);
    const profileImage = useAppSelector((state) => state.currentUser.currentUser?.cover);
    const [menuOpen, setMenuOpen] = useState(false);

    async function handleLogoutClick() {
        await dispatch(signOutUser());
        dispatch(cleanCurrentUser());
        setMenuOpen(false);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const searchQuery = event.target.value;
        console.log("Current search query:", searchQuery);
    }

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
                        <Link className={`${styles.navCategory} md`} to={'/test'}>
                            Test Page
                        </Link>
                    </li>

                    <li className={styles.searchInputContainer}>

                        <form className={styles.searchForm} onSubmit={handleSubmit}>
                            <Icon className={styles.loupe} name="loupe" size={20} />
                            <FormField 
                            variant="search" 
                            type="text" 
                            name="search" 
                            placeholder="Search courses" 
                            onChange={handleChange} 
                            label="Search courses"></FormField>
                        </form>
                    </li>
                </ul>

                <ul className={styles.userList}>
                    <li className={styles.cart}>
                        <Link className={styles.cartLink} to={'/checkout'}>
                            <Icon name="cart" size={24} />
                        </Link>
                    </li>

                    {user ? (
                        <>
                            <li className={styles.profile}>
                                <img
                                    src={profileImage}
                                    alt="Your profile image"
                                    className={styles.profilePicture}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                />
                                {menuOpen && (
                                    <div className={styles.dropdownMenu}>
                                        <LinkComponent to="/profile" onClick={() => setMenuOpen(false)}>
                                            My Profile
                                        </LinkComponent>
                                        <Button onClick={handleLogoutClick}>
                                            Logout
                                        </Button>
                                    </div>
                                )}
                            </li>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}