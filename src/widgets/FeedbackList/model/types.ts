import { Responsive } from 'react-alice-carousel'
import { IFeedback } from '../../../entities/Feedback';

export interface IFeedBackList {
    className?: string;
    items: IFeedback[];
    responsive?: Responsive,
    paddingRight?: number,
    paddingLeft?: number,
    countVisibleElements?: number
}