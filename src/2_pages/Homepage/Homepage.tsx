import styles from "./Homepage.module.css"
import { useEffect } from "react";
import { fetchUsers, selectUsersForTopMentors } from "../../5_entities/User";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import { fetchReviews } from '../../5_entities/Review';
import { fetchCourses } from '../../5_entities/Course';
import { fetchCategories } from '../../5_entities/Category';
        
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
        
    const popularMentors = useAppSelector(selectUsersForTopMentors);
    const categoryItems = useAppSelector(state => state.category.categories)
    const courseItems = useAppSelector(state => state.course.courses)

    return (
        <>
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />
            <TopCategories className={styles.topCategories} items={categoryItems} />
            <TopCourses className={styles.topCourses} items={courseItems} />
            <TopMentors className={styles.topMentors} items={popularMentors} />
            <Invitation className={styles.invitation} />
        </>
    )
}