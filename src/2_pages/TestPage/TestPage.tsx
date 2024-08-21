import styles from "./TestPage.module.css"
import { useEffect } from "react";
import { LearnerReviews } from "../../3_widgets/LearnerReviews";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import { LinkComponent } from "../../6_shared/ui/atoms/Link";
import { fetchReviews } from "../../5_entities/Review";
import { TopCourses } from "../../3_widgets/TopCourses";
import { fetchCourses } from "../../5_entities/Course";
import { fetchCategories } from "../../5_entities/Category";
import { TopCategories } from "../../3_widgets/TopCategories";
import { ShoppingCart } from "../../3_widgets/ShoppingCart";

export function TestPage(): JSX.Element {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchReviews());
        dispatch(fetchCourses());
        dispatch(fetchCategories());
    }, [dispatch]);

    const reviewItems = useAppSelector(state => state.review.reviews)
    const courseItems = useAppSelector(state => state.course.courses)
    const categoryItems = useAppSelector(state => state.category.categories)

    return (
        <>
            <h2>Equal Columns</h2>
            <LinkComponent className={styles.container} to="#">Default</LinkComponent>
            <LinkComponent className={styles.container} to="#" variant="green">Login</LinkComponent>
            <LinkComponent className={styles.container} to="#" variant="purple">Signup</LinkComponent>
            <LearnerReviews className={styles.container} items={reviewItems}></LearnerReviews>
            <TopCourses className={styles.container} items={courseItems}></TopCourses>
            <TopCategories className={styles.container} items={categoryItems}></TopCategories>
            <ShoppingCart className={styles.container} items={courseItems}></ShoppingCart>
        </>
    )
}