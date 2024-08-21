import styles from "./Homepage.module.css"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import { fetchUsers, selectPopularMentors } from "../../5_entities/User";
import { fetchReviews } from '../../5_entities/Review';
import { fetchCourses, selectPopularCourses } from '../../5_entities/Course';
import { fetchCategories, selectPopularCategories } from '../../5_entities/Category';

import { Advantages } from "../../3_widgets/Advantages";
import { Intro } from "../../3_widgets/Intro";
import { TopCourses } from '../../3_widgets/TopCourses';
import { TopCategories } from '../../3_widgets/TopCategories';
import { TopMentors } from "../../3_widgets/TopMentors";
import { Invitation } from "../../3_widgets/Invitation";

export function Homepage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchCategories());
        dispatch(fetchCourses());
        dispatch(fetchReviews());
    }, [dispatch]);

    const popularMentors = useAppSelector(selectPopularMentors).slice(0, 4);
    const popularCategories = useAppSelector(selectPopularCategories).slice(0, 4);
    const popularCourses = useAppSelector(selectPopularCourses).slice(0, 4);

    return (
        <div className={styles.page}>
            <Intro className={styles.container} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.container} items={popularCategories} />
            <TopCourses className={styles.container} items={popularCourses} />
            <TopMentors className={styles.container} items={popularMentors} />
            <Invitation className={styles.container} />
        </div>
    )
}