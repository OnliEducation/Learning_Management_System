type Role = 'user' | 'viewer' | 'mentor';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

type Error = string | null;

export type {
    Role,
    Status,
    Error,
}