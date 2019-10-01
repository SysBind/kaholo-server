import { Injectable } from '@nestjs/common';
import { IVaultDocument, IVault } from './model/vault';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VaultService {
  constructor(
    @InjectModel('Vault') private readonly vaultModel: Model<IVaultDocument>,
  ) {}

  getVaultList(): string {
    return 'Hello World!';
  }

  async createVault(vaultData: IVault): Promise<IVault> {
    const vault = new this.vaultModel(vaultData);
    return await vault.save();
  }
}
