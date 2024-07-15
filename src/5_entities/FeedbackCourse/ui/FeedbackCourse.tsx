import { IFeedbackCourse } from "../model/types";
import styles from "./FeedbackCourse.module.css";

import Avatar from '../../../6_shared/ui/images/Customer.jpg'
import { Rating } from "../../../6_shared/ui/components/Rating";

export function FeedbackCourse(props: IFeedbackCourse): JSX.Element {
    const {
        user,
        rating,
        date,
        text,
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.infoAuthor}>
                <span className={styles.avatar}>
                    <img src={Avatar} alt={`${user.firstName} avatar`} />
                </span>
                <span className={styles.author}>{user.firstName + ' ' + user.lastName}</span>
            </div>
            <div className={styles.feedback}>
                <p className={styles.description}>{text}</p>

                <div className={styles.groupInfo}>
                    <Rating value={rating} className={styles.rating} />
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
        </div>
    )
}