declare class CreateOrderItemDto {
    productId: number;
    quantity: number;
}
export declare class CreateOrderDto {
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    orderType: "pickup" | "dine_in";
    tableNumber?: string;
    items: CreateOrderItemDto[];
}
export {};
