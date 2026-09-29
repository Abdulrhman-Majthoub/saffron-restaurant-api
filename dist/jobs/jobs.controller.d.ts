import { CreateJobDto } from './dto/create-job.dto.js';
import { UpdateJobStatusDto } from './dto/update-job-status.dto.js';
import { JobsService } from './jobs.service.js';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findAll(): Promise<import("./job-application.entity.js").JobApplicationEntity[]>;
    create(createJobDto: CreateJobDto): Promise<import("./job-application.entity.js").JobApplicationEntity>;
    updateStatus(id: number, updateJobStatusDto: UpdateJobStatusDto): Promise<import("./job-application.entity.js").JobApplicationEntity>;
    remove(id: number): void;
}
