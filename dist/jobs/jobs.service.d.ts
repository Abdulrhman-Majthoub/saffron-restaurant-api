import { Repository } from 'typeorm';
import type { CreateJobDto } from './dto/create-job.dto.js';
import type { UpdateJobStatusDto } from './dto/update-job-status.dto.js';
import { JobApplicationEntity } from './job-application.entity.js';
export declare class JobsService {
    private readonly jobsRepository;
    constructor(jobsRepository: Repository<JobApplicationEntity>);
    findAll(): Promise<JobApplicationEntity[]>;
    create(createJobDto: CreateJobDto): Promise<JobApplicationEntity>;
    updateStatus(id: number, updateJobStatusDto: UpdateJobStatusDto): Promise<JobApplicationEntity>;
    remove(id: number): Promise<void>;
}
