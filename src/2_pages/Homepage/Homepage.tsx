

import { useEffect } from "react";
import { Advantages } from "../../3_widgets/Advantages";
import { Intro } from "../../3_widgets/Intro";
import { TopMentors } from "../../3_widgets/TopMentors";
import { fetchUsers, selectUsersForTopMentors } from "../../5_entities/User";
import { useAppDispatch, useAppSelector } from "../../6_shared/lib/store";
import styles from "./Homepage.module.css"
import { Invitation } from "../../3_widgets/Invitation";



export function Homepage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const popularMentors = useAppSelector(selectUsersForTopMentors);

    return (
        <>
            <Intro className={styles.intro} />
            <Advantages className={styles.advantages} />

            <TopMentors className={styles.topMentors} items={popularMentors} />
            <Invitation className={styles.invitation} />
        </>
    )
}