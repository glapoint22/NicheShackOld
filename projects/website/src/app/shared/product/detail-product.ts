import { QuickLookProduct } from './quick-look-product';
import { ProductContent } from './product-content/product-content';
import { ReviewProduct } from './review-product';

export interface DetailProduct extends QuickLookProduct, ReviewProduct {
    hoplink: string;
    content: ProductContent;
}