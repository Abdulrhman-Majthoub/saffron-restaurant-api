import { ProductsService } from "./products.service.js";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("./entities/product.entity.js").Product[]>;
}
