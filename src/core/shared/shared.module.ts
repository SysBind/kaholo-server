import { Module, Global } from '@nestjs/common';
import { VaultService } from './vault/vault.service';
import { VaultSchema } from './vault/model/vault';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './projects/projects.service';
import { ProjectSchema } from './projects/model/projects.model';
import { NotificationsGateway } from './websockets/notifications.gateway';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vault', schema: VaultSchema }]),
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
  ],
  providers: [
    // VaultService,
    NotificationsGateway,
    ProjectsService],
  exports: [
    // VaultService,
    ProjectsService,
    NotificationsGateway,
  ],
})
export class SharedModule {
}
