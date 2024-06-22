import { Outlet } from "react-router-dom";
import { Header } from "../../3_widgets/Header";
import { Footer } from "../../3_widgets/Footer";

import styles from "./Layout.module.css"

export function Layout() {
    return (
        <>
            <Header className={styles.container} />
            <Outlet />
            <Footer className={styles.footer}/>
        </>
    )
}