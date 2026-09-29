import { OnModuleInit } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity.js";
export declare class ProductsService implements OnModuleInit {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<Product[]>;
}
