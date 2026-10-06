import { Controller, Get } from '@nestjs/common';
import { DailyCareService } from './daily-care.service';

@Controller('daily-care')
export class DailyCareController {
  constructor(private readonly service: DailyCareService) {}

  @Get()
  list() {
    return this.service.list();
  }
}
