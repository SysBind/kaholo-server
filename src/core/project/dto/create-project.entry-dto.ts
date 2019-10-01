import { ApiModelProperty } from '@nestjs/swagger';

export interface IProjectEntryDto {
  name: string;
  description?: string;
  archived?: boolean;
  maps: [string];
}

export class CreateProjectsEntryDto implements IProjectEntryDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
  @ApiModelProperty()
  readonly maps: [string];
  @ApiModelProperty()
  archived = false;
}
