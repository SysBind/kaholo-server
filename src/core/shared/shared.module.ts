import { Module, Global } from '@nestjs/common';
import { VaultService } from './vault/vault.service';
import { vaultSchema } from './vault/model/vault';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './projects/projects.service';
import { projectSchema } from './projects/model/projects.model';
import { NotificationsGateway } from './websockets/notifications.gateway';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vault', schema: vaultSchema }]),
    MongooseModule.forFeature([{ name: 'Project', schema: projectSchema }]),
  ],
  providers: [
    // VaultService,
    NotificationsGateway,
    ProjectsService,
  ],
  exports: [
    // VaultService,
    ProjectsService,
    NotificationsGateway,
  ],
})
export class SharedModule {
}
