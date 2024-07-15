import { LearnerReviews } from "../../3_widgets/LearnerReviews";
import { useAppSelector } from "../../6_shared/lib/store";
import styles from "./TestPage.module.css"

export function TestPage(): JSX.Element {
    const items = useAppSelector((state) => state.feedbackCourse.feedbacks);

    return <LearnerReviews className={styles.container} items={items} />;
}