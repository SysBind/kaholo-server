import { Module } from '@nestjs/common';
import { VaultController } from './vault.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [VaultController],
})
export class VaultModule {}
