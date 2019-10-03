import { TestDataManager } from './factories/test-data-manager';
import supertest from 'supertest';
import { project } from '../src/core/shared/projects/model/projects.model';
import projectsFactory from './factories/projects.factory';


const baseApiURL = 'http://127.0.0.1:3000/api';

describe('Projects API tests', () => {
  const testDataManager = new TestDataManager(project);

  beforeEach(async () => {
    await testDataManager.generateInitialCollection(
      projectsFactory.generateProjects(),
    );
  });

  afterEach(async () => {
    await testDataManager.clear();
  });


  describe('Negative', () => {

    describe(`POST /create`, () => {
      it(`should respond with a 500 status code`, () => {
         return supertest(baseApiURL)
          .post(`/projects`)
          .send()
          .expect(500);
      });
    });
  });

  describe('Positive', () => {

    describe(`POST /create`, () => {
      it(`should respond with the new project`, () => {
        const randomProject = projectsFactory.generateSingleProject();
        return supertest(baseApiURL)
          .post(`/projects`)
          .send(randomProject)
          .expect(201)
          .then(res => expect(res.body.name).toEqual(randomProject.name));
      });
    });
  });

});
