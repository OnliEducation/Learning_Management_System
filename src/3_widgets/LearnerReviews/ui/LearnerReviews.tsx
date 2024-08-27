import { Review } from "../../../5_entities/Review/ui/Review";
import { CardsLayout } from "../../../6_shared/ui/templates/CardsLayout";
import { ILearnerReviews } from "../model/types";
import styles from './LearnerReviews.module.css'

export function LearnerReviews(props: ILearnerReviews): JSX.Element {
    const { items, className } = props;

    if (!items) {
        return <div className={className}>No feedback available</div>;
    }

    return (
        <section className={className ? className : ''}>
            <h2 className={styles.heading}>Learner reviews</h2>
            <CardsLayout className={styles.cards} columns={2}>
                {items.map((item) => (
                    <li className={styles.cardItem} key={item.user.id}>
                        <Review
                            id={item.id}
                            user={item.user}
                            course={item.course} // TODO: ненужное поле для ui Review. Нужен новый интерфейс?
                            rating={item.rating}
                            content={item.content}
                            createdAt={item.createdAt}
                        />
                    </li>
                ))}
            </CardsLayout>
        </section>
    );
}