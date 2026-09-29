import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

@Column({ length: 120, unique: true })
name: string;

  @Column({ length: 80 })
  category: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "text" })
  imageUrl: string;

  @Column({ default: true })
  isAvailable: boolean;
}