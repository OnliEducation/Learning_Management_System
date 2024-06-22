import { IFeedback } from '../model/types';
import styles from './Feedback.module.css'
import Quotes from '../../../6_shared/ui/icons/quotes.svg?react'

export function FeedBack(props: IFeedback): JSX.Element {
    const {
        description,
        avatar,
        author,
        profession,
    } = props;
    return (
        <div className={styles.container}>
            <span>
                <Quotes />
            </span>
            <p className={styles.description}>{description}</p>
            <div className={styles.infoAuthor}>
                <span className={styles.avatar}>
                    <img src={avatar} alt={`${author} avatar`} />
                </span>
                <div className={styles.wrapper}>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.profession}>{profession}</span>
                </div>
            </div>
        </div>
    )
}
