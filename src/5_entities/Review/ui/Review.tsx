import { IReview } from "../model/types";
import styles from "./Review.module.css";

import Avatar from '../../../6_shared/ui/images/Mentor.png'
import { Rating } from "../../../6_shared/ui/atoms/Rating";

export function Review(props: IReview): JSX.Element {
    const {
        user,
        rating,
        content,
        createdAt,
    } = props;
    return (
        <div className={styles.review}>
            <div className={styles.infoAuthor}>
                <span className={styles.avatarContainer}>
                    <img src={Avatar} alt={`${user.firstName} avatar`} />
                </span>
                <span className={`${styles.author} lg`}>{user.firstName + ' ' + user.lastName}</span>
            </div>

            <div className={styles.feedback}>
                <p className={styles.description}>{content}</p>

                <div className={styles.footer}>
                    <Rating value={rating} className={styles.rating} />
                    <span className={`${styles.date} md`}>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}