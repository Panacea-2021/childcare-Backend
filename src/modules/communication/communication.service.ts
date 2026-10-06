import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationService {
  list() {
    return { module: 'communication', message: 'Module scaffold ready' };
  }
}
