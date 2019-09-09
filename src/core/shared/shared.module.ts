import { Module, Global } from '@nestjs/common';
import { VaultService } from './vault/vault.service';
import { VaultSchema } from './vault/model/vault';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vault', schema: VaultSchema }]),
  ],
  providers: [VaultService],
  exports: [VaultService],
})
export class SharedModule {}
