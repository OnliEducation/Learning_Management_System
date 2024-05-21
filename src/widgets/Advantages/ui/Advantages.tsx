import { IAdvantages } from "../model/types"
import styles from "./Advantages.module.css"

export function Advantages({ className }: IAdvantages): JSX.Element {
    return (
        <section className={className ? styles.container + ' ' + className : styles.container}>
            <ul className={styles.list}>
                <li className={styles.advantage}>
                    <span className={styles.count}>250+</span>
                    <h2 className={styles.description}>
                        Courses by our best mentors
                    </h2>
                </li>

                <li className={styles.advantage}>
                    <span className={styles.count}>1000+</span>
                    <h2 className={styles.description}>
                        Courses by our best mentors
                    </h2>
                </li>

                <li className={styles.advantage}>
                    <span className={styles.count}>15+</span>
                    <h2 className={styles.description}>
                        Courses by our best mentors
                    </h2>
                </li>

                <li className={styles.advantage}>
                    <span className={styles.count}>2400+</span>
                    <h2 className={styles.description}>
                        Courses by our best mentors
                    </h2>
                </li>
            </ul>
        </section>
    )
}