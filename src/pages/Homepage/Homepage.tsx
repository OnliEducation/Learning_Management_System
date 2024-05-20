import { TopCategories, topCategoriesData } from '../../widgets/TopCategories' // Настроил индекс 
import { TopCourses, topCoursesData } from '../../widgets/TopCourses';
import { Invitation } from '../../widgets/Invitation';
import { Advantages } from '../../widgets/Advantages';
import { Intro } from '../../widgets/Intro';
import { Header } from '../../widgets/Header';

import styles from "./Homepage.module.css"

export function Homepage() {
    return (
        <>
            <Header className={styles.header} />
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.topCategories} categoryData={topCategoriesData} />
            <TopCourses className={styles.topCourses} courseData={topCoursesData} />
            <Invitation className={styles.invitation} />
        </>
    )
}