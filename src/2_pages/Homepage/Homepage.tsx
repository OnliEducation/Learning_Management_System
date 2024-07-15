import { TopCategories, topCategoriesData } from '../../3_widgets/TopCategories' // Настроил индекс 
import { TopCourses, topCoursesData } from '../../3_widgets/TopCourses';
import { Invitation } from '../../3_widgets/Invitation';
import { Advantages } from '../../3_widgets/Advantages';
import { Intro } from '../../3_widgets/Intro';

import styles from "./Homepage.module.css"
import { DataTopInstructors, TopInstructors } from '../../3_widgets/TopInstructors';


import { useAppDispatch } from '../../6_shared/lib/store';
import { fetchFeedbackCourse } from '../../5_entities/FeedbackCourse/model/FeedbackCourseThunk';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

export function Homepage() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchFeedbackCourse());
    }, [dispatch]);

    return (
        <>
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.topCategories} categoryData={topCategoriesData} />
            <TopCourses className={styles.topCourses} courseData={topCoursesData} />
            <TopInstructors className={styles.topInstructors} items={DataTopInstructors} />
            <Invitation className={styles.invitation} />
            
            <Link to={'/test'}>
                <button>test page</button>
            </Link>
        </>
    )
}