import { Link } from "react-router-dom";
import { Course } from "../../../entities/Course";

import styles from './topCourses.module.css'
import { ITopCourses } from "../model/types";

export function TopCourses(props: ITopCourses): JSX.Element {
    const { className, courseData } = props

    return (
        <section className={className ? className : ''}>
            <div className={styles.header}>
                <h2>Top Courses</h2>
                <Link className={styles.allCoursesLink} to="/category-page">
                    See All
                </Link>
            </div>
            <ul className={styles.coursesContainer}>
                {courseData?.map((item) => (
                    <li key={item.title}>
                        <Course
                            link={item.link}
                            image={item.image}
                            title={item.title}
                            author={item.author}
                            ratingStars={item.ratingStars}
                            ratingCount={item.ratingCount}
                            price={item.price}
                            hoursCount={item.hoursCount}
                            lecturesCount={item.lecturesCount}
                            difficulty={item.difficulty}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}