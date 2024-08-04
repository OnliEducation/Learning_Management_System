import { LearnerReviews } from "../../3_widgets/LearnerReviews";
import { useAppSelector } from "../../6_shared/lib/store";
import { SearchInput } from "../../6_shared/ui/atoms/SearchInput";
import { FormField } from "../../6_shared/ui/molecules/FormField";
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
        </>
    )
}