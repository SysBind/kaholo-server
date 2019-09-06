import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VaultModule } from './vault/vault.module';
import { RouterModule, Routes } from 'nest-router';

const routes: Routes = [
  {
    path: 'vault',
    module: VaultModule,
  },
];
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:7vXYF4nNu8B9SnH5@cluster0-qnjcz.mongodb.net/matt?retryWrites=true&w=majority',
    ),
    RouterModule.forRoutes(routes),
    VaultModule,
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
