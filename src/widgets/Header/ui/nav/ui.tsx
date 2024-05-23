import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { Input } from "../../../../shared/ui/components/Input"

export function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <Link className={styles.link} to={'/categories'}>
                    Categories
                </Link>
                <div className={styles.searchInputContainer}>
                    <Input className={styles.searchInput} />
                </div>
                <Link className={styles.link} to={'/categories'}>
                    Teach on Byway
                </Link>
            </ul>
        </nav>
    )
}