import { Controller, Get } from '@nestjs/common';
import { TenancyService } from './tenancy.service';

@Controller('tenancy')
export class TenancyController {
  constructor(private readonly service: TenancyService) {}

  @Get()
  list() {
    return this.service.list();
  }
}
