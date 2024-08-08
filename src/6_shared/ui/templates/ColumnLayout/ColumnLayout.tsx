import { IColumnLayout } from "./types";
import styles from "./ColumnLayout.module.css";

export function ColumnLayout(props: IColumnLayout) {
    const {
        className,
        variant,
        leftContent,
        rightContent
    } = props;

    return (
        <div className={className ? `${className} ${styles.container} ${styles[variant]}` : `${styles.container} ${styles[variant]}`}>
            <div className={`${styles.column} ${styles.left}`}>{leftContent}</div>
            {variant !== 'single' && (
                <div className={`${styles.column} ${styles.right}`}>{rightContent}</div>
            )}
        </div>
    );
}