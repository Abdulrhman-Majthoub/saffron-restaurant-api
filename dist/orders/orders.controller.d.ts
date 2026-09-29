import { CreateOrderDto } from "./dto/create-order.dto.js";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto.js";
import { OrdersService } from "./orders.service.js";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity.js").Order>;
    findAll(): Promise<import("./entities/order.entity.js").Order[]>;
    updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto): Promise<import("./entities/order.entity.js").Order>;
}
