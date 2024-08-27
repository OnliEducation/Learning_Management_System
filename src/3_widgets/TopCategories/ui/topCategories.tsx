import styles from './TopCategories.module.css';
import { CategoryCardCompact } from '../../../5_entities/Category';
import { ITopCategories } from '../model/types';
import { CardsLayout } from '../../../6_shared/ui/templates/CardsLayout';
import { Icon } from '../../../6_shared/ui/atoms/Icon';
import { LinkComponent } from '../../../6_shared/ui/atoms/LinkComponent';

export function TopCategories(props: ITopCategories): JSX.Element {
  const { items, className } = props;

  if (!items) {
    return <div className={className}>No categories available</div>;
  }

  return (
    <section className={className ? className : ''}>
      <header className={styles.header}>
        <h2 className='h1'>Top Categories</h2>
        <LinkComponent to="/categories-page">
          See All
          <Icon className={styles.icon} name='chevron' size={24} />
        </LinkComponent>
      </header>
      <CardsLayout className={styles.cards} columns={4}>
        {items?.map((item) => (
          <li className={styles.cardItem} key={item.id}>
            <CategoryCardCompact
              id={item.id}                 // TODO:спросить у антона           
              cover={item.cover}
              label={item.label}
              courses={item.courses}
            />
          </li>
        ))}
      </CardsLayout>
    </section>
  );
}