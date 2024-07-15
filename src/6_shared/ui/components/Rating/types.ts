import { RatingProps } from "@smastrom/react-rating"

export interface IRating extends RatingProps {
    /** Rating value. */
    readonly value: number
    /** The maximum width of the component. */
    readonly maxWidth?: number
    /** Additional styles. */
    readonly className?: string
}