import { IHeader } from "../model/types"
import { Logo } from "./logo"
import { Nav } from "./nav"
import { ViewerActions } from "./viewerActions"

import styles from "./Header.module.css"


export function Header({ className }: IHeader) {
    return (
        <header className={className ? styles.header + " " + className : styles.header}>
            <div className={styles.container}>
                <Logo />
                <Nav />
                <ViewerActions />
            </div>
        </header>
    )
}