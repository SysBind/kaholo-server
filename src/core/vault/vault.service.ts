import { Injectable } from '@nestjs/common';
import { IVault } from './model/vault';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VaultService {
  constructor(
    @InjectModel('Vault') private readonly vaultModel: Model<IVault>,
  ) {}

  getVaultList(): string {
    return 'Hello World!';
  }

  async createVault(vaultData: IVault): Promise<IVault> {
    const vault = new this.vaultModel(vaultData);
    return await vault.save();
  }
}
