import { AnchorHTMLAttributes } from "react";

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement>  {
    readonly variant?: 'default' | 'green' | 'purple' | 'salt';
    readonly to: string;
}