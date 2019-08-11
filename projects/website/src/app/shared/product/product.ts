import { ProductContent } from './product-content';
import { ProductPricePoint } from './product-price-point';
import { ProductMedia } from './product-media';

export class Product {
    public id: string;
    public title: string;
    public urlTitle: string;
    public image: string;
    public rating: number;
    public totalReviews: number;
    public minPrice: number;
    public maxPrice: number;
    public hoplink: string;
    public content: Array<ProductContent> = [];
    public pricePoints: Array<ProductPricePoint> = [];
    public shareImage: string;
    public description: string;
    public media: Array<ProductMedia> = [];
    public oneStar: number;
    public twoStars: number;
    public threeStars: number;
    public fourStars: number;
    public fiveStars: number;
}