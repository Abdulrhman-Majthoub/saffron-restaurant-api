var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Product } from "../products/entities/product.entity.js";
import { Order } from "./entities/order.entity.js";
let OrdersService = class OrdersService {
    ordersRepository;
    productsRepository;
    constructor(ordersRepository, productsRepository) {
        this.ordersRepository = ordersRepository;
        this.productsRepository = productsRepository;
    }
    async create(createOrderDto) {
        if (createOrderDto.orderType === "dine_in" &&
            !createOrderDto.tableNumber) {
            throw new BadRequestException("A table number is required for dine-in orders.");
        }
        const productIds = createOrderDto.items.map((item) => item.productId);
        const products = await this.productsRepository.findBy({
            id: In(productIds),
        });
        if (products.length !== new Set(productIds).size) {
            throw new BadRequestException("One or more selected products are no longer available.");
        }
        const productById = new Map(products.map((product) => [product.id, product]));
        const items = createOrderDto.items.map((requestedItem) => {
            const product = productById.get(requestedItem.productId);
            if (!product || !product.isAvailable) {
                throw new BadRequestException("One or more selected products are no longer available.");
            }
            return {
                productId: product.id,
                productName: product.name,
                unitPrice: Number(product.price),
                quantity: requestedItem.quantity,
            };
        });
        const totalAmount = items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
        const order = this.ordersRepository.create({
            customerName: createOrderDto.customerName,
            customerEmail: createOrderDto.customerEmail,
            customerPhone: createOrderDto.customerPhone,
            orderType: createOrderDto.orderType,
            tableNumber: createOrderDto.tableNumber,
            status: "new",
            totalAmount,
            items,
        });
        return this.ordersRepository.save(order);
    }
    findAll() {
        return this.ordersRepository.find({
            order: {
                createdAt: "DESC",
            },
        });
    }
    async updateStatus(id, updateOrderStatusDto) {
        const order = await this.ordersRepository.findOneBy({ id });
        if (!order) {
            throw new NotFoundException(`Order #${id} was not found.`);
        }
        order.status = updateOrderStatusDto.status;
        return this.ordersRepository.save(order);
    }
};
OrdersService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Order)),
    __param(1, InjectRepository(Product)),
    __metadata("design:paramtypes", [Repository,
        Repository])
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map