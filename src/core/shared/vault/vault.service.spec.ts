import { Test, TestingModule } from '@nestjs/testing';
import { VaultService } from './vault.service';
import { getModelToken } from '@nestjs/mongoose';
import VaultModel from './model/vault';

describe('VaultService', () => {
  let service: VaultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VaultService,
        VaultService,
        {
          provide: getModelToken('Vault'),
          useValue: VaultModel,
        },
      ],
    }).compile();

    service = module.get<VaultService>(VaultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
