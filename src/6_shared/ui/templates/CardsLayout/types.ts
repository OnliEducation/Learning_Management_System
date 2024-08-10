export interface ICardsLayout {
    /** The number of columns in the component. */
    columns: 2 | 3 | 4;
    /** Additional styly. */
    className?: string;
    children: React.ReactNode;
}
