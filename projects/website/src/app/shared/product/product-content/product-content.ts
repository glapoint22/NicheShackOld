import { ContentItem } from './content-item';
import { ContentPricePoint } from './content-price-point';

export interface ProductContent {
    items: Array<ContentItem>;
    pricePoints: Array<ContentPricePoint>;
}
