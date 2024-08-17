import { Error, IPurchase, Status } from "../../../6_shared/types"

interface PurchaseState {
    /** The list of purchases. */
    readonly purchases: IPurchase[] | null;
    /** Indicator of the data loading state. */
    readonly status: Status;
    /** The error message, if any, encountered during data processing. */
    readonly error: Error;
}

export type {
    IPurchase,
    PurchaseState,
}