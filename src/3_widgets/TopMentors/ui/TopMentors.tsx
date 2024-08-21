
import { UserCardCompact } from "../../../5_entities/User";
import { Icon } from "../../../6_shared/ui/atoms/Icon";
import { LinkComponent } from "../../../6_shared/ui/atoms/LinkComponent";
import { ITopMentors } from "../model/types";

import styles from "./TopMentors.module.css"
import { CardsLayout } from "../../../6_shared/ui/templates/CardsLayout";

export function TopMentors(props: ITopMentors): JSX.Element {
    const { className, items } = props;

    return (
        <section className={`${className ? className : ''} ${styles.content}`}>
            <header className={styles.header}>
                <h2 className='h1'>Top Instructors</h2>
                <LinkComponent to='/mentors' className={styles.link}>
                    See All
                    <Icon className={styles.icon} name="chevron" size={24} />
                </LinkComponent>
            </header>

            <CardsLayout
                columns={4}
                className={styles.cards}
            >
                {items?.map((item) => (
                    <li key={item.id}>
                        <UserCardCompact
                            id={item.id}
                            name={item.name}
                            cover={item.cover}
                            headline={item.headline}
                        />
                    </li>
                ))}
            </CardsLayout>
        </section>
    )
}