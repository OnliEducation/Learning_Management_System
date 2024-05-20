import { Link } from "react-router-dom";
import { Course } from "../../../entities/Course";

import styles from './topCourses.module.css'
import { ITopCourses } from "../model/types";

export function TopCourses(props: ITopCourses): JSX.Element {
    const { className, courseData } = props

    return (
        <div className={styles.topCoursesWidgetContainer + ' ' + className}>
            <div className={styles.topCoursesHeader}>
                <h2>Top Courses</h2>
                <Link className={styles.allCoursesLink} to="/category-page">
                    See All
                </Link>
            </div>
            <section className={styles.coursesContainer}>
                {courseData?.map((item) => (
                        <Course
                            key={item.title}
                            link={item.link}
                            image={item.image}
                            title={item.title}
                            author={item.author}
                            ratingCount={item.ratingCount}
                            price={item.price}
                            hoursCount={item.hoursCount}
                            lecturesCount={item.lecturesCount}
                            difficulty={item.difficulty}
                        />
                    ))}
            </section>
        </div>
    );
}