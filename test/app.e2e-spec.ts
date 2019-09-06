import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { CoreModule } from './../src/core/core.module';
import { CoreService } from './../src/core/core.service';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

describe('CoreController (e2e)', () => {
  const coreService = { get: () => 'Serve SPA' };
  let core: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
    })
      .overrideProvider(CoreService)
      .useValue(coreService)
      .compile();

    core = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await core.init;
  });

  it('/ (GET)', () => {
    return request(core.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Serve SPA!');
  });

  afterAll(async () => {
    await core.close();
  });
});
