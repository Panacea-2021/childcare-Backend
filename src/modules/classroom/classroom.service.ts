import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassroomService {
  list() {
    return { module: 'classroom', message: 'Module scaffold ready' };
  }
}
