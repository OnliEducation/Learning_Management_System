import { LearnerReviews } from "../../3_widgets/LearnerReviews";
import { useAppSelector } from "../../6_shared/lib/store";
import { SearchInput } from "../../6_shared/ui/atoms/SearchInput";
import { FormField } from "../../6_shared/ui/molecules/FormField";
import { CardsLayout } from "../../6_shared/ui/templates/CardsLayout";
import { CarouselLayout } from "../../6_shared/ui/templates/CarouselLayout";
import { ColumnLayout } from "../../6_shared/ui/templates/ColumnLayout";
import styles from "./TestPage.module.css"

export function TestPage(): JSX.Element {
    const items = useAppSelector((state) => state.feedbackCourse.feedbacks);

    return (
        <>
            <LearnerReviews className={styles.container} items={items} />
            <SearchInput />
            <FormField
                label='Имя'
                name=''
                required={true}
                variant="sm"
                type="text"
            />
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
            <div>
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
            </div>
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
        </>
    )
}