import { DisplayProduct } from './display-product';
import { ProductMedia } from './product-media';

export interface QuickLookProduct extends DisplayProduct {
    description: string;
    media: Array<ProductMedia>;
}
