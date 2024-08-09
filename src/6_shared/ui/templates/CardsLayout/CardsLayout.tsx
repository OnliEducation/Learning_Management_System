import { ICardsLayout } from './types';

import styles from './CardsLayout.module.css';

export function CardsLayout(props: ICardsLayout) {
    const {
        columns,
        className,
        children
    } = props;

    const columnClass = `columns${columns}`;
    const isValidColumnClass = columnClass in styles;
    const containerClass = `${className ? className : ''} ${isValidColumnClass ? styles[columnClass] : ''} ${styles.container}`;

    return (
        <div className={containerClass}>
            {children}
        </div>
    );
}