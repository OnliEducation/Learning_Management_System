import { Link } from "react-router-dom";
import { IUserCardCompact } from "../model/types";
import styles from "./UserCardCompact.module.css"

export function UserCardCompact(props: IUserCardCompact): JSX.Element {
    const {
        id,
        name,
        cover,
        headline,
    } = props;
    return (
        <Link to={`users-${id}-info`}>
            <div className={styles.container}>
                <span className={styles.avatar}>
                    <img src={cover} alt={`${cover} avatar`} />
                </span>
                <p className={`${styles.author} md`}>{name}</p>
                <p className={`${styles.profession} sm`}>{headline}</p>
            </div>
        </Link>
    )
}