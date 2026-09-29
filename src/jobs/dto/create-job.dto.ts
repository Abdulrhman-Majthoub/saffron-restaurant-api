import type { JobStatus } from '../jobs.types.js';

export class CreateJobDto {
  company!: string;
  position!: string;
  status!: JobStatus;
}