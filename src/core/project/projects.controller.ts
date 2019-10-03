import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ProjectsService } from '../shared/projects/projects.service';
import { CreateProjectsEntryDto } from './dto/create-project.entry-dto';
import { ProjectExitDtoInterface } from './dto/create-project.exit-dto';

@Controller()
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  async createNewProject(@Body() createVaultDto: CreateProjectsEntryDto): Promise<ProjectExitDtoInterface> {
    try {
    return await this.projectsService.create(createVaultDto);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message,
      }, 500);
    }
  }
}
