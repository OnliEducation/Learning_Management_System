import { Responsive } from 'react-alice-carousel'

export interface ICarousel {
    readonly children: JSX.Element[] | Element[];
    readonly responsive?: Responsive;
    readonly className?: string;
    readonly paddingLeft?: number;
    readonly paddingRight?: number;
}