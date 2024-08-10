export interface IColumnLayout {
    className?: string;
    /** Possible options for displaying columns. */
    variant: 'equal' | 'single' | 'largeLeft' | 'largeRight';
    /** The content of the left column. */
    leftContent: React.ReactNode;
    /** The content of the right column. */
    rightContent?: React.ReactNode;
}