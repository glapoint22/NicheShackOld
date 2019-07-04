import { DisplayProduct } from './display-product';
import { ReviewProduct } from './review-product';
import { Review } from '../review/review';

export interface DetailReviewProduct extends DisplayProduct, ReviewProduct {
    positiveReview: Review;
    negativeReview: Review;
}