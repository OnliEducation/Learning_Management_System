import { Link } from 'react-router-dom';
import { Category } from '../../../entities/Category';
import { ITopCategories } from '../model/types';

import styles from './topCategories.module.css';


export function TopCategories(props: ITopCategories): JSX.Element {
  const { className, categoryData } = props;

  return (
    <section className={styles.categoriesWidgetContainer + ' ' + className}>
      <header className={styles.categoriesHeader}>
        <h2>Top Categories</h2>
        <Link className={styles.allCategoriesLink} to="/categories-page">
          See All
        </Link>
      </header>
      <div className={styles.categoriesContainer}>
        {categoryData?.map((item) => (
          <Category
            key={item.category}
            link={item.link}
            icon={item.icon}
            category={item.category}
            courseCount={item.courseCount}
          />
        ))}
      </div>
    </section>
  );
}