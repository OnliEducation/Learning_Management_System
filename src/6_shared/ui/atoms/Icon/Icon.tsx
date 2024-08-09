import { IIcon } from "./types";

export function Icon(props: IIcon) {
    const {
        className,
        name,
        size,
    } = props;
    return (
        <svg className={className} width={size} height={size}>
            <use href={`#icon-${name}`} />
        </svg>
    )
}