import { Link } from 'react-router-dom';
import { ICourseCard } from "../../model/types"
import styles from './CourseCardCompact.module.css'


export function CourseCardCompact(props: ICourseCard): JSX.Element {
    const {
        cover,
        title,
        author,
        price,
    } = props;

    return (
        <div className={styles.course}>
            <Link className={styles.imageContainer} to={"#"} >
                <img className={styles.courseImage} src={cover} alt={`${title} image`} />
            </Link>
            <Link to={"#"} >
                <h3 className={`${styles.courseTitle} lg`}>{title}</h3>
            </Link>
            <p className={`${styles.courseAuthor} md`}>By {author.name}</p>
            <p className={`${styles.coursePrice} md`}>${price}</p>
        </div>
    );
}