import { ApiModelProperty } from '@nestjs/swagger';
import { IMap } from '../../shared/maps/model/map.model';

export interface ProjectExitDtoInterface {
  name: string;
  description?: string;
  archived?: boolean;
  maps: [string | IMap];
}

export class CreateProjectsExitDto implements ProjectExitDtoInterface {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
  @ApiModelProperty()
  readonly maps: [IMap];
  @ApiModelProperty()
  archived = false;
}
