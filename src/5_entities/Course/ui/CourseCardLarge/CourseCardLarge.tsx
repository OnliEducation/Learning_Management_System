import { Link } from 'react-router-dom';
import { ICourseCard } from "../../model/types"
import styles from './CourseCardLarge.module.css'
import { Button } from '../../../../6_shared/ui/atoms/Button';

export function CourseCardLarge(props: ICourseCard): JSX.Element {
    const {
        cover,
        title,
        author,
        price,
    } = props;

    return (
        <div className={styles.course}>
            <img className={styles.courseImage} src={cover} alt={`${title} image`} />
            <div className={styles.info}>
                <div className={styles.cardHeader}>
                    <Link to={"#"} >
                        <h3 className={`${styles.courseTitle} lg`}>{title}</h3>
                    </Link>
                    <p className={`${styles.courseAuthor} md`}>By {author.name}</p>
                </div>

                <div className={styles.cardFooter}>
                    <p className={`${styles.coursePrice} lg`}>${price}</p>
                    <Button>
                        <span className='md'>Remove</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}