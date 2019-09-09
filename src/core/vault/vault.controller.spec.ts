import { Test, TestingModule } from '@nestjs/testing';
import { VaultController } from './vault.controller';
import { VaultService } from '../shared/vault/vault.service';
import { getModelToken } from '@nestjs/mongoose';
import VaultModel from '../shared/vault/model/vault';

describe('Vault Controller', () => {
  let controller: VaultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaultController],
      providers: [
        VaultService,
        {
          provide: getModelToken('Vault'),
          useValue: VaultModel,
        },
      ],
    }).compile();

    controller = module.get<VaultController>(VaultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
