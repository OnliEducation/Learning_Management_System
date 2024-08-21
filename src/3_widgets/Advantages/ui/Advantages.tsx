import { IAdvantages } from "../model/types"
import styles from "./Advantages.module.css"

export function Advantages({ className }: IAdvantages): JSX.Element {
    return (
        <section className={`${className ? className : ''} ${styles.container}`}>
            <h2 className="visually-hidden">Advantages</h2>
            <ul className={styles.list}>
                <li className={styles.advantage}>
                    <span className='h2'>250+</span>
                    <span className='sm'>
                        Courses by our best mentors
                    </span>
                </li>

                <li className={styles.advantage}>
                    <span className='h2'>1000+</span>
                    <span className='sm'>
                        Courses by our best mentors
                    </span>
                </li>

                <li className={styles.advantage}>
                    <span className='h2'>15+</span>
                    <span className='sm'>
                        Courses by our best mentors
                    </span>
                </li>

                <li className={styles.advantage}>
                    <span className='h2'>2400+</span>
                    <span className='sm'>
                        Courses by our best mentors
                    </span>
                </li>
            </ul>
        </section>
    )
}