import { FeedBack } from "../../../entities/Feedback";
import { Carousel } from "../../../shared/ui/components/Carousel";
import { IFeedBackList } from "../model/types";
import styles from "./FeedbackList.module.css"
import { Responsive } from 'react-alice-carousel'

const MyResponsive: Responsive = {
    1024: { items: 3 },
    768: { items: 2 },
    576: { items: 1 },
}

export function FeedBackList(props: IFeedBackList): JSX.Element {
    const {
        className,
        items,
        responsive = MyResponsive,
        paddingRight = 16,
    } = props;

    return (
        <div className={className ? styles.content + ' ' + className : styles.content}>
            <h2 className={styles.heading}>What Our Customer Say About Us</h2>
            <Carousel
                className={styles.carousel}
                responsive={responsive}
                paddingRight={paddingRight}>
                {items?.map((item) => (
                    <FeedBack
                        key={item.author}
                        description={item.description}
                        author={item.author}
                        avatar={item.avatar}
                        profession={item.profession}
                    />
                ))}
            </Carousel>
        </div>
    )
}
