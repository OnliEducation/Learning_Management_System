import { TopCategories, topCategoriesData } from '../../widgets/TopCategories' // Настроил индекс 
import { TopCourses, topCoursesData } from '../../widgets/TopCourses';
import { Invitation } from '../../widgets/Invitation';
import { Advantages } from '../../widgets/Advantages';
import { Intro } from '../../widgets/Intro';
import { Header } from '../../widgets/Header';

import styles from "./Homepage.module.css"
import { DataTopInstructors, TopInstructors } from '../../widgets/TopInstructors';
import { DataFeedBackList, FeedBackList } from '../../widgets/FeedbackList';
import { Footer } from '../../widgets/Footer';

export function Homepage() {
    return (
        <>
            <Header className={styles.container} />
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.topCategories} categoryData={topCategoriesData} />
            <TopCourses className={styles.topCourses} courseData={topCoursesData} />
            <TopInstructors className={styles.topInstructors} items={DataTopInstructors} />
            <FeedBackList className={styles.feedBackList} items={DataFeedBackList} />
            <Invitation className={styles.invitation} />
            <Footer className={styles.footer} />
        </>
    )
}