import { OrderItem } from "./order-item.entity.js";
export type OrderStatus = "new" | "preparing" | "ready" | "completed" | "cancelled";
export type OrderType = "pickup" | "dine_in";
export declare class Order {
    id: number;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    orderType: OrderType;
    tableNumber?: string;
    status: OrderStatus;
    totalAmount: number;
    items: OrderItem[];
    createdAt: Date;
}
