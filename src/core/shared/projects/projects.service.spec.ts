import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { getModelToken } from '@nestjs/mongoose';
import { project } from './model/projects.model';
import { NotificationInterface, NotificationsGateway } from '../websockets/notifications.gateway';
import projectsFactory from '../../../../test/factories/projects.factory';

describe('ProjectsService', () => {
  let projectsService: ProjectsService;
  let spyProjectModel: typeof project;
  let spyNotificationsGateway: NotificationsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
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

    projectsService = module.get<ProjectsService>(ProjectsService);
    spyNotificationsGateway = module.get<NotificationsGateway>(NotificationsGateway);
    spyProjectModel = module.get(getModelToken('Project'));

  });

  it('should be defined', () => {
    expect(projectsService).toBeDefined();
  });

  it('should create a new project', async () => {
    const data = projectsFactory.generateSingleProject();

    project.create = jest.fn(() => data);
    spyNotificationsGateway.notify = jest.fn(() => undefined);

    const createdProject = await projectsService.create(data);

    expect(project.create).toHaveBeenCalledWith(data);
    expect(spyNotificationsGateway.notify).toHaveBeenCalled();
    expect(createdProject).toMatchObject(data);

  });
});
