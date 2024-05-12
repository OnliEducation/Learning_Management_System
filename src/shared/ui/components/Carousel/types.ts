import { Responsive } from 'react-alice-carousel'

export interface ICarousel {
    /** List of elements for the carousel. */
    readonly children: JSX.Element[] | Element[]
    /** The number of visible elements in the carousel. */
    readonly countVisibleElements?: number
    readonly autoWidth?: boolean
    readonly responsive?: Responsive
    readonly disableDotsControls?: boolean
    /** Additional styles. */
    readonly className?: string


    readonly paddingLeft?: number
    readonly paddingRight?: number

}