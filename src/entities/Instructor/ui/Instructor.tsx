import { IInstructor } from "../model/types";
import Star from "../../../shared/ui/icons/star.svg?react"
import styles from "./Instructor.module.css"

export function Instructor(props: IInstructor): JSX.Element {
    const {
        avatar,
        author,
        profession,
        rating,
        students,
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.personalInfo}>
                <span className={styles.avatar}>
                    <img src={avatar} alt={`Avatar ${author}`} />
                </span>
                <p className={styles.author}>{author}</p>
                <p className={styles.profession}>{profession}</p>
            </div>
            <div className={styles.otherInfo}>
                <span className={styles.groupRating}>
                    <Star className={styles.icon} />
                    <span className={styles.rating}>
                        {rating}
                    </span>
                </span>
                <p className={styles.students}>
                    {`${students} Students`}
                </p>
            </div>
        </div>
    )
}