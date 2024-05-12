import { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { ICarousel } from './types'
import './Carousel.module.css'

export function Carousel(props: ICarousel): JSX.Element {
    const {
        children,
        countVisibleElements = 1,
        autoWidth,
        responsive,
        disableDotsControls,
        className,
        paddingLeft,
        paddingRight,
    } = props

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const minActiveIndexElement = 0;
    const maxActiveIndexElement = children?.length ? children.length - countVisibleElements : 0;

    const isDisabledSlidePrev = activeIndex <= minActiveIndexElement;
    const isDisabledSlideNext = activeIndex >= maxActiveIndexElement;

    const getSlidePrev = () => {
        if (isDisabledSlidePrev) {
            return
        }
        setActiveIndex(activeIndex - 1)
    }

    const getSlideNext = () => {
        if (isDisabledSlideNext) {
            return
        }
        setActiveIndex(activeIndex + 1)
    }

    return (
        <div className={className}>
            <AliceCarousel
                autoWidth={autoWidth}
                mouseTracking
                responsive={responsive}
                activeIndex={activeIndex}
                items={children}
                disableButtonsControls
                disableDotsControls={disableDotsControls}
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
            />
            <button
                type='button'
                className='btn-prev'
                onClick={getSlidePrev}
                disabled={isDisabledSlidePrev}>
                &lang;
            </button>
            <button
                type='button'
                className='btn-next'
                onClick={getSlideNext}
                disabled={isDisabledSlideNext}>
                &rang;
            </button>
        </div>
    )
}
