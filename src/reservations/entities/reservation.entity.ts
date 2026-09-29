import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type ReservationStatus = 'confirmed' | 'cancelled';

@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  guestName: string;

  @Column({ length: 160 })
  guestEmail: string;

  @Column({ length: 40, nullable: true })
  guestPhone?: string;

  @Column({ type: 'date' })
  reservationDate: string;

  @Column({ length: 20 })
  reservationTime: string;

  @Column({ type: 'int' })
  guestCount: number;

  @Column({ type: 'text', nullable: true })
  specialRequest?: string;

  @Column({ length: 20, default: 'confirmed' })
  status: ReservationStatus;

  @CreateDateColumn()
  createdAt: Date;
}
