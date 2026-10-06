import { Controller, Get } from '@nestjs/common';
import { CommunicationService } from './communication.service';

@Controller('communication')
export class CommunicationController {
  constructor(private readonly service: CommunicationService) {}

  @Get()
  list() {
    return this.service.list();
  }
}
