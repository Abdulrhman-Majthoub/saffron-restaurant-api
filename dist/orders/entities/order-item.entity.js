var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity.js";
let OrderItem = class OrderItem {
    id;
    productId;
    productName;
    unitPrice;
    quantity;
    order;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "productId", void 0);
__decorate([
    Column({ length: 120 }),
    __metadata("design:type", String)
], OrderItem.prototype, "productName", void 0);
__decorate([
    Column({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderItem.prototype, "unitPrice", void 0);
__decorate([
    Column({ type: "int" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    ManyToOne(() => Order, (order) => order.items, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Order)
], OrderItem.prototype, "order", void 0);
OrderItem = __decorate([
    Entity("order_items")
], OrderItem);
export { OrderItem };
//# sourceMappingURL=order-item.entity.js.map