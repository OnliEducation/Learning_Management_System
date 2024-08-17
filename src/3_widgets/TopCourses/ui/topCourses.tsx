import { Link } from "react-router-dom";
import { ITopCourses } from "../model/types";
import { CourseCardCompact } from "../../../5_entities/Course";
import styles from './TopCourses.module.css'
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { CardsLayout } from "../../../6_shared/ui/templates/CardsLayout";

export function TopCourses(props: ITopCourses): JSX.Element {
    const { className, items } = props

    return (
        <section className={className ? className : ''}>
            <header className={styles.header}>
                <h2 className='h1'>Top Courses</h2>
                <Link className={`${styles.linkAll} md`} to="/courses-page">
                    See All
                    <Icon className={styles.icon} name='chevron' size={24} />
                </Link>
            </header>
            <CardsLayout className={styles.cards} columns={4}>
                {items?.map((item) => (
                    <li className={styles.cardItem}  key={item.id}>
                        <CourseCardCompact
                            id={item.id}                 // TODO: спросить у Антона
                            cover={item.cover}
                            title={item.title}
                            author={item.author}
                            price={item.price}
                        />
                    </li>
                ))}
            </CardsLayout>
        </section>
    );
}