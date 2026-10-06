import { Controller, Get } from '@nestjs/common';
import { HealthSafetyService } from './health-safety.service';

@Controller('health-safety')
export class HealthSafetyController {
  constructor(private readonly service: HealthSafetyService) {}

  @Get()
  list() {
    return this.service.list();
  }
}
