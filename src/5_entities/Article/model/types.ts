import { Error, IArticle, Status } from "../../../6_shared/types"

interface ArticleState {
    /** The list of articles. */
    articles: IArticle[] | null;
    /** Indicator of the data loading state. */
    status: Status;
    /** The error message, if any, encountered during data processing. */
    error: Error;
}

export type {
    IArticle,
    ArticleState,
}