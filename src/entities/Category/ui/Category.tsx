import { Link } from 'react-router-dom';
import { ICategory } from '../model/types';
import styles from './Category.module.css'


export function Category(props: ICategory): JSX.Element {
  const { icon, category, courseCount, link } = props;

  return (
    <Link to={link} className={styles.category}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={category} />
      </div>
      <h3 className={styles.categoryTitle}>{category}</h3>
      <p className={styles.count}>{courseCount} Courses</p>
    </Link>
  );
}