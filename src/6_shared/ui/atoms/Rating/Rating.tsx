import { Rating as ReactRating, ThinRoundedStar } from '@smastrom/react-rating'
import type { ItemStyles } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { IRating } from './types'

const ratingStyles: ItemStyles = {
    itemShapes: ThinRoundedStar,
    itemStrokeWidth: 3,
    activeFillColor: '#fff',
    activeStrokeColor: '#4958C6F5', // --light-vista-primary 
    inactiveFillColor: '#fff',
    inactiveStrokeColor: '#4958C6A3' // --light-vista-tertiary
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