import { Order } from "./order.entity.js";
export declare class OrderItem {
    id: number;
    productId: number;
    productName: string;
    unitPrice: number;
    quantity: number;
    order: Order;
}
