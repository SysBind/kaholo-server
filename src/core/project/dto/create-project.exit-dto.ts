import { ApiModelProperty } from '@nestjs/swagger';
import { IMap } from '../../shared/maps/model/map.model';

export interface IProjectExitDto {
  name: string;
  description?: string;
  archived?: boolean;
  maps: [string | IMap];
}

export class CreateProjectsExitDto implements IProjectExitDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
  @ApiModelProperty()
  readonly maps: [IMap];
  @ApiModelProperty()
  archived = false;
}
