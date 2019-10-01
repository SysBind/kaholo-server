import { Injectable } from '@nestjs/common';
import { IProjectDocument } from './model/projects.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProjectsEntryDto } from '../../project/dto/create-project.entry-dto';
import { IProjectExitDto } from '../../project/dto/create-project.exit-dto';
import { NotificationsGateway } from '../websockets/notifications.gateway';

@Injectable()
export class ProjectsService {
  constructor(
    private notificationsGateway: NotificationsGateway,
    @InjectModel('Project') private readonly createdProject: Model<IProjectDocument>) {
  }

  async create(createCatDto: CreateProjectsEntryDto): Promise<IProjectExitDto> {
    const createdProject = new this.createdProject(createCatDto);
    try {
      const savedProject = await createdProject.save();

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
