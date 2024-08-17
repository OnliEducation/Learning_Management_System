export interface IArticle {
    /** The unique identifier of the article entity. */
    id: string;
    /** The title of the article. */
    title: string;
    /** The content of the article, represented as an array of strings. */
    content: string[];
    /** The date when the article was created. */
    createdAt: Date;
    /** The date when the article was last edited. */
    editedAt: Date | null;
}