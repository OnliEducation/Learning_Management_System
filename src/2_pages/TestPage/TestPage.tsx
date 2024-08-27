import styles from "./TestPage.module.css"
import { useEffect } from "react";
import { CourseDetailed } from "../../3_widgets/CourseDetailed";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import { Button } from "../../6_shared/ui/atoms/Button";
import { Input } from "../../6_shared/ui/atoms/Input";
import { LinkComponent } from "../../6_shared/ui/atoms/LinkComponent";
import { fetchCourses } from "../../5_entities/Course";


export function TestPage(): JSX.Element {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const courseItems = useAppSelector(state => state.course.courses)?.slice(0,1);

    return (
        <>
            <h2>
                Course page widget:
            </h2>

            <CourseDetailed className={`${styles.container} ${styles.courses}`} items={courseItems}></CourseDetailed>

            <h2>
                Test components:
            </h2>
            <p>Buttons:</p>
            <Button variant="transparent">Transparent button</Button>
            <Button>Default button</Button>
            <p>Link components:</p>
            <LinkComponent to="#">Default Link</LinkComponent>
            <LinkComponent to="#" variant="green">Green Link</LinkComponent>
            <LinkComponent to="#" variant="purple">Purple Link</LinkComponent>
            <LinkComponent to="#" variant="salt">Salt Link</LinkComponent>
            <p>Inputs:</p>
            <Input variant="default">Default Input</Input>
            <Input variant="search">Search Input</Input>

        </>
    )
}