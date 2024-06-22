import { Instructor } from "../../../5_entities/Instructor";
import { ITopInstructors } from "../model/types";
import styles from "./TopInstructors.module.css"

export function TopInstructors(props: ITopInstructors): JSX.Element {
    const { className, items } = props;

    return (
        <section className={className ? styles.content + ' ' + className : styles.content}>
            <header className={styles.header}>
                <h2 className={styles.title}>Top Instructors</h2>
                <a className={styles.link}>See All</a>
            </header>

            <div className={styles.cards}>
                {items?.map((item) => (
                    <Instructor
                        key={item.author}
                        avatar={item.avatar}
                        author={item.author}
                        profession={item.profession}
                        rating={item.rating}
                        studentsCount={item.studentsCount}
                    />
                ))}
            </div>
        </section>
    )
}