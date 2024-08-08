export interface IColumnLayout {
    className?: string;
    variant: 'equal' | 'single' | 'largeLeft' | 'largeRight';
    leftContent: React.ReactNode;
    rightContent?: React.ReactNode;
}