import { useEffect } from "react";
import { LearnerReviews } from "../../3_widgets/LearnerReviews";
// import { TopCategories } from "../../3_widgets/TopCategories";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import { Button } from "../../6_shared/ui/atoms/Button";
import { Icon } from "../../6_shared/ui/atoms/Icon";
import { Input } from "../../6_shared/ui/atoms/Input";
import { FormField } from "../../6_shared/ui/molecules/FormField";
// import { FormField } from "../../6_shared/ui/molecules/FormField";
import { CardsLayout } from "../../6_shared/ui/templates/CardsLayout";
import { CarouselLayout } from "../../6_shared/ui/templates/CarouselLayout";
import { ColumnLayout } from "../../6_shared/ui/templates/ColumnLayout";
import styles from "./TestPage.module.css"
// import { ShoppingCart } from "../../3_widgets/ShoppingCart/ui/shoppingCart";
import { fetchCourses } from "../../5_entities/Course";
import { fetchCategories } from "../../5_entities/Category";
// import { TopCourses } from "../../3_widgets/TopCourses";
import { fetchReviews } from "../../5_entities/Review";
import { CourseReviews } from "../../3_widgets/CourseReviews";


export function TestPage(): JSX.Element {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchCourses());
        dispatch(fetchReviews());
    }, [dispatch]);

    const reviewItems = useAppSelector((state) => state.review.reviews);
    // const courseItems = useAppSelector((state) => state.course.courses);
    // const categoriesItems = useAppSelector((state) => state.category.categories);

    return (
        <>
            <CourseReviews className={styles.container} items={reviewItems} />
            <LearnerReviews className={styles.container} items={reviewItems} />
            {/* <ShoppingCart className={styles.container} items={courseItems} /> */}
            {/* <TopCourses className={styles.container} items={courseItems}/> */}
            {/* <TopCategories className={styles.container} items={categoriesItems} /> */}

            <div>
                <h2>Equal Columns</h2>
                <ColumnLayout
                    className="bb"
                    variant="equal"
                    leftContent={<div style={{ background: 'lightblue' }}>Left Column</div>}
                    rightContent={<div style={{ background: 'lightgreen' }}>Right Column</div>}
                />

                <h2>Single Column</h2>
                <ColumnLayout
                    variant="single"
                    leftContent={<div style={{ background: 'lightblue' }}>Single Column</div>}
                />

                <h2>Unequal Columns (Left Larger)</h2>
                <ColumnLayout
                    variant="largeLeft"
                    leftContent={<div style={{ background: 'lightblue' }}>Left Column</div>}
                    rightContent={<div style={{ background: 'lightgreen' }}>Right Column</div>}
                />

                <h2>Unequal Columns (Right Larger)</h2>
                <ColumnLayout
                    variant="largeRight"
                    leftContent={<div style={{ background: 'lightblue' }}>Left Column</div>}
                    rightContent={<div style={{ background: 'lightgreen' }}>Right Column</div>}
                />
            </div>
            <CardsLayout
                columns={4}>
                <p>1 ый элемент всего того что надо</p>
                <p>1 ый элемент всего того что надо</p>
                <p>1 ый элемент всего того что надо</p>
                <p>1 ый элемент всего того что надо</p>
                <p>1 ый элемент всего того что надо</p>
                <p>1 ый элемент всего того что надо</p>
                {/* <p>1 ый элемент всего того что надо</p> */}
                {/* <p>1 ый элемент всего того что надо</p> */}

            </CardsLayout>
            <CarouselLayout>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div><div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
                <div>
                    <p>1 ый элемент всего того что надо</p>
                    <span>XXX</span>
                    <button>тык</button>
                </div>
            </CarouselLayout>
            <Icon
                name="arrow"
                size={24} />
            <div>
                <Button>
                    <span className="md">тык</span>
                    <Icon
                        name="chevron"
                        size={24}
                    />
                </Button>
            </div>
            <div >
                <Input
                    placeholder="Search"
                    variant="search"
                />

            </div>


            <Input
                placeholder="Default"
                variant="default"
            />

            <div>
                <FormField
                    label="search"
                    variant="search"
                />
            </div>


            <FormField
                label="default"
                variant="default"
            />

        </>
    )
}