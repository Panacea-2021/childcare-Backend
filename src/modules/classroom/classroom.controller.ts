import { Controller, Get } from '@nestjs/common';
import { ClassroomService } from './classroom.service';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly service: ClassroomService) {}

  @Get()
  list() {
    return this.service.list();
  }
}
