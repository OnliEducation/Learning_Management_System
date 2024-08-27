import styles from './TopCourses.module.css'
import { ITopCourses } from "../model/types";
import { CourseCardCompact } from "../../../5_entities/Course";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { CardsLayout } from "../../../6_shared/ui/templates/CardsLayout";
import { LinkComponent } from '../../../6_shared/ui/atoms/LinkComponent';   

export function TopCourses(props: ITopCourses): JSX.Element {
    const { className, items } = props

    return (
        <section className={className ? className : ''}>
            <header className={styles.header}>
                <h2 className='h1'>Top Courses</h2>
                <LinkComponent to="/courses-page">
                    See All
                    <Icon className={styles.icon} name='chevron' size={24} />
                </LinkComponent>
            </header>
            <CardsLayout className={styles.cards} columns={4}>
                {items?.map((item) => (
                    <li className={styles.cardItem} key={item.id}>
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