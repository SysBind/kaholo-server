import { Controller, Get, Post, Body } from '@nestjs/common';
import { VaultInterface } from '../shared/vault/model/vault';
import { VaultService } from '../shared/vault/vault.service';
import { CreateVaultDto } from './vault.dto';

@Controller()
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Get()
  getHello(): string {
    return this.vaultService.getVaultList();
  }

  @Post()
  setSomeData(@Body() createVaultDto: CreateVaultDto): Promise<VaultInterface> {
    return this.vaultService.createVault(createVaultDto);
  }
}
