import type { JobStatus } from '../jobs.types.js';

export class UpdateJobStatusDto {
  status!: JobStatus;
}