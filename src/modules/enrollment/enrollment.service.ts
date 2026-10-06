import { Injectable } from '@nestjs/common';

@Injectable()
export class EnrollmentService {
  list() {
    return { module: 'enrollment', message: 'Module scaffold ready' };
  }
}
