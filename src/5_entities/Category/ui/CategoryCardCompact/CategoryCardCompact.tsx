import { Link } from 'react-router-dom';
import { ICategoryCardCompact } from '../../model/types';
import { Icon } from '../../../../6_shared/ui/atoms/Icon';
import styles from './CategoryCardCompact.module.css'

export function CategoryCardCompact(props: ICategoryCardCompact): JSX.Element {
  const { cover, label, courses } = props;

  return (
      <Link to={label} className={styles.category}>
        <div className={styles.iconContainer}>
          <Icon className={styles.icon} name={cover} size={50} />
        </div>
        <h3 className={`${styles.categoryTitle} lg`}>{label}</h3>
        <p className={`${styles.count} md`}>{courses.length} Courses</p>
      </Link>
  );
}