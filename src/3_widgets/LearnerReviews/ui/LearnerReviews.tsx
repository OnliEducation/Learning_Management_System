import { FeedbackCourse } from "../../../5_entities/FeedbackCourse/ui/FeedbackCourse";
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
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.user.id}>
                        <FeedbackCourse                            
                            user={item.user}
                            text={item.text}
                            rating={item.rating}
                            date={item.date}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}