import { Injectable } from '@nestjs/common';
import { ProjectDocumentInterface } from './model/projects.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProjectsEntryDto } from '../../project/dto/create-project.entry-dto';
import { ProjectExitDtoInterface } from '../../project/dto/create-project.exit-dto';
import { NotificationsGateway } from '../websockets/notifications.gateway';

@Injectable()
export class ProjectsService {
  constructor(
    private notificationsGateway: NotificationsGateway,
    @InjectModel('Project') private readonly createdProject: Model<ProjectDocumentInterface>) {
  }

  async create(createCatDto: CreateProjectsEntryDto): Promise<ProjectExitDtoInterface> {
    try {
      const savedProject = await this.createdProject.create(createCatDto);

      this.notificationsGateway.notify({
        type: 'success',
        title: 'Project created',
        message: `${savedProject.name} created successfully.`,
      });

      return savedProject;
    } catch (err) {

      this.notificationsGateway.notify({
        title: 'Oh no...',
        message: `There was an error creating this project.`,
        type: 'error',
      });

      throw err;
    }
  }
}
