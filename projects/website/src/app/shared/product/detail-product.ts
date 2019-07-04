import { QuickLookProduct } from './quick-look-product';
import { ProductContent } from './product-content/product-content';

export interface DetailProduct extends QuickLookProduct {
    hoplink: string;
    content: ProductContent;
    reviewStats: Array<any>;
    reviews: Array<any>;
}
