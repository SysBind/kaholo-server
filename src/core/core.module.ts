import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VaultModule } from './vault/vault.module';
import { RouterModule, Routes } from 'nest-router';
import dotenv from 'dotenv';
import { ProjectsModule } from './project/projects.module';

dotenv.config();

const routes: Routes = [
  {
    path: 'vault',
    module: VaultModule,
  },
  {
    path: 'projects',
    module: ProjectsModule,
  },
];
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RouterModule.forRoutes(routes),
    // VaultModule,
    ProjectsModule,
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
