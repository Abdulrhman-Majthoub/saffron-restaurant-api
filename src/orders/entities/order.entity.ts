import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderItem } from "./order-item.entity.js";

export type OrderStatus =
  | "new"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

export type OrderType = "pickup" | "dine_in";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  customerName: string;

  @Column({ length: 160 })
  customerEmail: string;

  @Column({ length: 40, nullable: true })
  customerPhone?: string;

  @Column({ length: 20 })
  orderType: OrderType;

  @Column({ length: 30, nullable: true })
  tableNumber?: string;

  @Column({ length: 20, default: "new" })
  status: OrderStatus;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  totalAmount: number;

  @OneToMany(() => OrderItem, (item) => item.order, {
    cascade: true,
    eager: true,
  })
  items: OrderItem[];

  @CreateDateColumn()
  createdAt: Date;
}
