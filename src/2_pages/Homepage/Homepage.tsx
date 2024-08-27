import styles from "./Homepage.module.css"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import { fetchUsers, selectTopMentors } from "../../5_entities/User";
import { fetchReviews } from '../../5_entities/Review';
import { fetchCourses, selectTopCourses } from '../../5_entities/Course';
import { fetchCategories, selectTopCategories } from '../../5_entities/Category';

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

    const topMentors = useAppSelector(selectTopMentors).slice(0,4);
    const topCategories = useAppSelector(selectTopCategories).slice(0,4);
    const topCourses = useAppSelector(selectTopCourses).slice(0,4);

    return (
        <div className={styles.page}>
            <Intro className={styles.container} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.container} items={topCategories} />
            <TopCourses className={styles.container} items={topCourses} />
            <TopMentors className={styles.container} items={topMentors} />
            <Invitation className={styles.container} />
        </div>
    )
}