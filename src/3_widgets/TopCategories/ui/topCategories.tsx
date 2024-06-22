import { Link } from 'react-router-dom';
import { Category } from '../../../5_entities/Category';
import { ITopCategories } from '../model/types';

import styles from './topCategories.module.css';


export function TopCategories(props: ITopCategories): JSX.Element {
  const { className, categoryData } = props;

  return (
    <section className={className ? className : ''}>
      <header className={styles.header}>
        <h2 className={styles.title}>Top Categories</h2>
        <Link className={styles.linkAll} to="/categories-page">
          See All
        </Link>
      </header>

      <ul className={styles.categoriesContainer}>
        {categoryData?.map((item) => (
          <li key={item.id}>
            <Category
              id={item.id} // <-- Вопрос Дане
              link={item.link}
              icon={item.icon}
              category={item.category}
              courseCount={item.courseCount}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}