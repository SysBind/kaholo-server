import { ApiModelProperty } from '@nestjs/swagger';
import { VaultInterface } from '../shared/vault/model/vault';

export class CreateVaultDto implements VaultInterface {
  @ApiModelProperty()
  readonly name: string;
}
