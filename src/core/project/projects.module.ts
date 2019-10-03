import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
