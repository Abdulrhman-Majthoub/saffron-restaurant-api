import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Product } from "../products/entities/product.entity.js";
import { CreateOrderDto } from "./dto/create-order.dto.js";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto.js";
import { Order } from "./entities/order.entity.js";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,

    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    if (
      createOrderDto.orderType === "dine_in" &&
      !createOrderDto.tableNumber
    ) {
      throw new BadRequestException(
        "A table number is required for dine-in orders.",
      );
    }

    const productIds = createOrderDto.items.map((item) => item.productId);

    const products = await this.productsRepository.findBy({
      id: In(productIds),
    });

    if (products.length !== new Set(productIds).size) {
      throw new BadRequestException(
        "One or more selected products are no longer available.",
      );
    }

    const productById = new Map(products.map((product) => [product.id, product]));

    const items = createOrderDto.items.map((requestedItem) => {
      const product = productById.get(requestedItem.productId);

      if (!product || !product.isAvailable) {
        throw new BadRequestException(
          "One or more selected products are no longer available.",
        );
      }

      return {
        productId: product.id,
        productName: product.name,
        unitPrice: Number(product.price),
        quantity: requestedItem.quantity,
      };
    });

    const totalAmount = items.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0,
    );

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

  async updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    const order = await this.ordersRepository.findOneBy({ id });

    if (!order) {
      throw new NotFoundException(`Order #${id} was not found.`);
    }

    order.status = updateOrderStatusDto.status;

    return this.ordersRepository.save(order);
  }
}