import { Repository } from "typeorm";
import { Product } from "../products/entities/product.entity.js";
import { CreateOrderDto } from "./dto/create-order.dto.js";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto.js";
import { Order } from "./entities/order.entity.js";
export declare class OrdersService {
    private readonly ordersRepository;
    private readonly productsRepository;
    constructor(ordersRepository: Repository<Order>, productsRepository: Repository<Product>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order>;
}
