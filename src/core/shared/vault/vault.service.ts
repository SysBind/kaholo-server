import { Injectable } from '@nestjs/common';
import { VaultDocumentInterface, VaultInterface } from './model/vault';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VaultService {
  constructor(
    @InjectModel('Vault') private readonly vaultModel: Model<VaultDocumentInterface>,
  ) {}

  getVaultList(): string {
    return 'Hello World!';
  }

  createVault(vaultData: VaultInterface): Promise<VaultInterface> {
    const vault = new this.vaultModel(vaultData);
    return vault.save();
  }
}
