import { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { ICarousel } from './types'
import styles from './Carousel.module.css';
import Chevron from "../../icons/chevron.svg?react"

export function Carousel(props: ICarousel): JSX.Element {
    const {
        children,
        responsive,
        className,
        paddingLeft,
        paddingRight,
    } = props;

    const carouselRef = useRef<AliceCarousel>(null);

    const renderPrevButton = (): JSX.Element => {
        return (
            <button
                className={styles.button + ' ' + styles.prev}
                onClick={() => carouselRef.current?.slidePrev()}
            >
                <Chevron />
            </button>
        );
    };

    const renderNextButton = (): JSX.Element => {
        return (
            <button
                className={styles.button + ' ' + styles.next}
                onClick={() => carouselRef.current?.slideNext()}
            >
                <Chevron />
            </button>
        );
    };

    return (
        <div className={className ? styles.container + ' ' + className : styles.container}>
            <AliceCarousel
                ref={carouselRef}
                items={children}
                responsive={responsive}
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                mouseTracking
                keyboardNavigation
                disableDotsControls
                infinite
                autoPlay
                autoPlayInterval={2000}
            />
        </div>
    );
}
