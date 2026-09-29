import type { JobStatus } from '../jobs.types.js';
export declare class CreateJobDto {
    company: string;
    position: string;
    status: JobStatus;
}
