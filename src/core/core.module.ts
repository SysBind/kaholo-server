import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VaultModule } from './vault/vault.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:7vXYF4nNu8B9SnH5@cluster0-qnjcz.mongodb.net/matt?retryWrites=true&w=majority',
    ),
    VaultModule,
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
