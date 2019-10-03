import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from '../shared/projects/projects.service';
import { getModelToken } from '@nestjs/mongoose';
import { project } from '../shared/projects/model/projects.model';
import { NotificationInterface, NotificationsGateway } from '../shared/websockets/notifications.gateway';
import projectsFactory from '../../../test/factories/projects.factory';

describe('Projects Controller', () => {
  let controller: ProjectsController;
  let spyProjectsService: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        {
          provide: ProjectsService,
          useFactory: () => ({
            create: () => ({}),
          }),
        },
        {
          provide: getModelToken('Project'),
          useValue: project,
        },
        {
          provide: NotificationsGateway,
          useFactory: () => ({
            notify: (notification: NotificationInterface) => undefined,
          }),
        },
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
    spyProjectsService = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create and return a new project', async () => {
    const data = projectsFactory.generateSingleProject();
    spyProjectsService.create = jest.fn(() => data);

    const savedProject = await controller.createNewProject(data);

    expect(spyProjectsService.create).toHaveBeenCalledWith(data);
    expect(savedProject).toMatchObject(savedProject);
  });

});
