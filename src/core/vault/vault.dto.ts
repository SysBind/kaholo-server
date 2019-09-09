import { ApiModelProperty } from '@nestjs/swagger';
import { IVault } from '../shared/vault/model/vault';

export class CreateVaultDto implements IVault {
  @ApiModelProperty()
  readonly name: string;
}
