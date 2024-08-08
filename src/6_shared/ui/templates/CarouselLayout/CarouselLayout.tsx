import { ICarousel } from './types';

import styles from './CarouselLayout.module.css';

export function CarouselLayout(props: ICarousel): JSX.Element {
    const {className, children} = props;
    return (
        <div className={className ? className + ' ' + styles.carouselContainer : styles.carouselContainer}>
            {children}
        </div>
    );
}