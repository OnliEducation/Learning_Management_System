export interface IRating {
    /** Rating value. */
    readonly value: number
    /** The maximum width of the component. */
    readonly maxWidth?: number
    /** Additional styles. */
    readonly className?: string
}