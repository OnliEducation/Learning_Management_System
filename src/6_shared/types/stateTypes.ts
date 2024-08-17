/** Possible roles that a user can have in the system. */
type Role = 'user' | 'viewer';

/** Status of an asynchronous operation. */
type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

/** Error message, if any. */
type Error = string | null;

export type {
    Role,
    Status,
    Error,
}