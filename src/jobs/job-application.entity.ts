import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { JobStatus } from './jobs.types.js';

@Entity('job_applications')
export class JobApplicationEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  company!: string;

  @Column()
  position!: string;

  @Column()
  status!: JobStatus;
}