import type { JobStatus } from './jobs.types.js';
export declare class JobApplicationEntity {
    id: number;
    company: string;
    position: string;
    status: JobStatus;
}
