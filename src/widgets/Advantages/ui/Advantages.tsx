import { IAdvantages } from "../model/types"
import styles from "./Advantages.module.css"

export function Advantages({ className }: IAdvantages): JSX.Element {
    return (
        <ul className={styles.advantagesWidgetContainer + ' ' + className}>

            <li className={styles.advantage}>
                <span className={styles.count}>250+</span>
                <h2 className={styles.advantageDescription}>
                    Courses by our best mentors
                </h2>
            </li>

            <li className={styles.advantage}>
                <span className={styles.count}>1000+</span>
                <h2 className={styles.advantageDescription}>
                    Courses by our best mentors
                </h2>
            </li>

            <li className={styles.advantage}>
                <span className={styles.count}>15+</span>
                <h2 className={styles.advantageDescription}>
                    Courses by our best mentors
                </h2>
            </li>

            <li className={styles.advantage}>
                <span className={styles.count}>2400+</span>
                <h2 className={styles.advantageDescription}>
                    Courses by our best mentors
                </h2>
            </li>

        </ul>
    )
}