import { Review } from "../../../5_entities/Review/ui/Review";
import { ColumnLayout } from "../../../6_shared/ui/templates/ColumnLayout";
import { ICourseReviews } from "../model/types";
import styles from './CourseReviews.module.css'

export function CourseReviews(props: ICourseReviews): JSX.Element {
    const { items, className } = props;

    if (!items) {
        return <div className={className}>No course reviews available</div>;
    }

    return (
        <section className={className ? className : ''}>
            <h2 className={styles.heading}>Course reviews</h2>
            <ColumnLayout className={styles.cards} variant="single" leftContent=
                {items.map((item) => (
                    <li className={styles.cardItem} key={item.user.id}>
                        <Review
                            id={item.id}
                            user={item.user}
                            rating={item.rating}
                            content={item.content}
                            createdAt={item.createdAt}
                        />
                    </li>
                ))}
            >
            </ColumnLayout>
        </section>
    );
}