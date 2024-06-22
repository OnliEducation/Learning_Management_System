import { Rating as ReactRating, ThinRoundedStar } from '@smastrom/react-rating'
import type { ItemStyles } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { IRating } from './types'

const ratingStyles: ItemStyles = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#EAB308', // wawarning/500
    inactiveFillColor: '#CBD5E1', // grey/300
}

export function Rating(props: IRating): JSX.Element {
    const { value, maxWidth = 100, className } = props

    return (
        <ReactRating
            style={{ maxWidth }}
            value={value}
            itemStyles={ratingStyles}
            readOnly
            className={className}
        />
    )
}