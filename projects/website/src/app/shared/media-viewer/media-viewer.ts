import { Modal } from 'src/app/components/modal/modal';
import { ProductMedia } from '../product/product-media';

export class MediaViewer extends Modal {
    media: Array<ProductMedia>;
    productTitle: string;
    currentMedia: ProductMedia;
}
