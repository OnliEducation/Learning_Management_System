import { IReview } from "../model/types";
import styles from "./Review.module.css";
import { Rating } from "../../../6_shared/ui/atoms/Rating";
import { formatDate } from "../../../6_shared/lib/helpers/transformDate";

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
                    <img src={user.cover} alt={`${user.name} avatar`} />
                </span>
                <span className={`${styles.author} lg`}>{user.name}</span>
            </div>

            <div className={styles.feedback}>
                <p className={styles.description}>{content}</p>

                <div className={styles.footer}>
                    <Rating value={rating} className={styles.rating} />
                    <span className={`${styles.date} md`}>
                        {formatDate(createdAt)}
                    </span>
                </div>
            </div>
        </div>
    )
}