import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  get(): string {
    return this.coreService.getHello();
  }
}
