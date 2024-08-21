import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store"
import { fetchUsers, selectUsersForTopMentors } from "../../5_entities/User";
import { TopMentors } from "../../3_widgets/TopMentors";

import styles from "./TestPage.module.css"

export function TestPage(): JSX.Element {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const popularMentors = useAppSelector(selectUsersForTopMentors);
    return (
        <TopMentors className={styles.container} items={popularMentors}/>              
    )
}