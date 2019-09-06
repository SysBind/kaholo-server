import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VaultModule } from './vault/vault.module';
import { RouterModule, Routes } from 'nest-router';
import dotenv from 'dotenv';

dotenv.config();

const routes: Routes = [
  {
    path: 'vault',
    module: VaultModule,
  },
];
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RouterModule.forRoutes(routes),
    VaultModule,
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
