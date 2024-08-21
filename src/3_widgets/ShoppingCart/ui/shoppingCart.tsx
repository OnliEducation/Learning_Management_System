import styles from './ShoppingCart.module.css';
import { IShoppingCart } from '../model/types';
import { ColumnLayout } from '../../../6_shared/ui/templates/ColumnLayout';
import { CourseCardLarge } from '../../../5_entities/Course';

export function ShoppingCart(props: IShoppingCart): JSX.Element {
  const { items, className } = props;

  if (!items) {
    return <div className={className}>Your cart is empty</div>;
  }

  return (
    <section className={className ? className : ''}>
      <header className={styles.header}>
        <h2 className='h1'>Shopping Cart</h2>
      </header>
      <ColumnLayout
        variant='largeLeft'
        leftContent={
          <div className={styles.leftColumn} >
            {items?.map((item) => (
              <li key={item.id}>
                <CourseCardLarge
                  id={item.id}
                  cover={item.cover}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                />
              </li>
            ))}</div>
        }
        rightContent={<div style={{ background: 'lightgreen' }}>Right Column</div>}
      >
      </ColumnLayout>
    </section>
  );
}