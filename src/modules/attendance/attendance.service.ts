import { Injectable } from '@nestjs/common';

@Injectable()
export class AttendanceService {
  list() {
    return { module: 'attendance', message: 'Module scaffold ready' };
  }
}
