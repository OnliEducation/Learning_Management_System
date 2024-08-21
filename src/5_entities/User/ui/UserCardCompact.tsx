import { IUserCardCompact } from "../model/types";
import styles from "./UserCardCompact.module.css"

export function UserCardCompact(props: IUserCardCompact): JSX.Element {
    const {
        name,
        cover,
        headline,
    } = props;
    return (
        <div className={styles.container}>
            <span className={styles.avatar}>
                <img src={cover} alt={`${cover} avatar`} />
            </span>
            <p className={`${styles.author} md`}>{name}</p>
            <p className={`${styles.profession} sm`}>{headline}</p>
        </div>
    )
}