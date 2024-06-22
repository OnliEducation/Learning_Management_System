import { TopCategories, topCategoriesData } from '../../3_widgets/TopCategories' // Настроил индекс 
import { TopCourses, topCoursesData } from '../../3_widgets/TopCourses';
import { Invitation } from '../../3_widgets/Invitation';
import { Advantages } from '../../3_widgets/Advantages';
import { Intro } from '../../3_widgets/Intro';

import styles from "./Homepage.module.css"
import { DataTopInstructors, TopInstructors } from '../../3_widgets/TopInstructors';
import { DataFeedBackList, FeedBackList } from '../../3_widgets/FeedbackList';

export function Homepage() {
    return (
        <>
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.topCategories} categoryData={topCategoriesData} />
            <TopCourses className={styles.topCourses} courseData={topCoursesData} />
            <TopInstructors className={styles.topInstructors} items={DataTopInstructors} />
            <FeedBackList className={styles.feedBackList} items={DataFeedBackList} />
            <Invitation className={styles.invitation} />
        </>
    )
}