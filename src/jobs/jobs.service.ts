import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateJobDto } from './dto/create-job.dto.js';
import type { UpdateJobStatusDto } from './dto/update-job-status.dto.js';
import { JobApplicationEntity } from './job-application.entity.js';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobApplicationEntity)
    private readonly jobsRepository: Repository<JobApplicationEntity>,
  ) {}

  findAll(): Promise<JobApplicationEntity[]> {
    return this.jobsRepository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async create(
    createJobDto: CreateJobDto,
  ): Promise<JobApplicationEntity> {
    const newApplication = this.jobsRepository.create({
      company: createJobDto.company,
      position: createJobDto.position,
      status: createJobDto.status || 'Preparing',
    });

    return this.jobsRepository.save(newApplication);
  }

  async updateStatus(
    id: number,
    updateJobStatusDto: UpdateJobStatusDto,
  ): Promise<JobApplicationEntity> {
    const application = await this.jobsRepository.findOneBy({ id });

    if (!application) {
      throw new NotFoundException(`Job application ${id} was not found.`);
    }

    application.status = updateJobStatusDto.status;

    return this.jobsRepository.save(application);
  }

  async remove(id: number): Promise<void> {
    const result = await this.jobsRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Job application ${id} was not found.`);
    }
  }
}