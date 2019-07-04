import { ReviewStat } from '../review-summary/review-stat';
import { Review } from '../review/review';

export interface ReviewProduct {
    reviewStats: Array<ReviewStat>;
    reviews: Array<Review>;
}