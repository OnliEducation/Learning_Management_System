import { Link } from 'react-router-dom';
import { ICourse } from "../model/types"
import { Rating } from '../../../shared/ui/components/Rating';

import styles from './Course.module.css'


export function Course(props: ICourse): JSX.Element {
    const {
        image,
        title,
        author,
        ratingStars,
        ratingCount,
        price,
        hoursCount,
        lecturesCount,
        difficulty,
        link
    } = props;

    return (
        <div className={styles.course}>
            <Link to={link} >
                <img className={styles.courseImage} src={image} alt={`${title} image`} />
            </Link>
            <h3 className={styles.courseTitle}>{title}</h3>
            <p className={styles.courseAuthor}>By {author}</p>
            <div className={styles.courseRatingContainer}>
                <Rating value={ ratingStars } />
                <p className={styles.courseRatingCount}>({ratingCount} Ratings)</p>
            </div>
            <p className={styles.courseInfos}>
                {hoursCount} Total Hours. {lecturesCount} Lectures. {difficulty}
            </p>
            <p className={styles.coursePrice}>${price}</p>

        </div>
    );
}