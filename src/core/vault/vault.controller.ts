import { Controller, Get, Post, Body } from '@nestjs/common';
import { VaultService } from './vault.service';
import { IVault } from './model/vault';

@Controller()
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Get()
  getHello(): string {
    return this.vaultService.getVaultList();
  }

  @Post()
  async setSomeData(@Body() vault: IVault): Promise<IVault> {
    return await this.vaultService.createVault(vault);
  }
}
