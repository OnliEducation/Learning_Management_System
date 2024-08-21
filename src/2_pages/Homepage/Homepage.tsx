import styles from "./Homepage.module.css"
import { Invitation } from '../../3_widgets/Invitation';
import { Advantages } from '../../3_widgets/Advantages';
import { Intro } from '../../3_widgets/Intro';
import { DataTopInstructors, TopInstructors } from '../../3_widgets/TopInstructors';
import { useAppDispatch, useAppSelector } from '../../6_shared/lib/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../../5_entities/Review';
import { TopCourses } from '../../3_widgets/TopCourses';
import { TopCategories } from '../../3_widgets/TopCategories';
import { fetchCourses } from '../../5_entities/Course';
import { fetchCategories } from '../../5_entities/Category';

export function Homepage() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchCourses());
        dispatch(fetchReviews());
    }, [dispatch]);

    const categoryItems = useAppSelector(state => state.category.categories)
    const courseItems = useAppSelector(state => state.course.courses)

    return (
        <>
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.topCategories} items={categoryItems} />
            <TopCourses className={styles.topCourses} items={courseItems} />
            <TopInstructors className={styles.topInstructors} items={DataTopInstructors} />
            <Invitation className={styles.invitation} />

            <Link to={'/test'}>
                <button>test page</button>
            </Link>
        </>
    )
}