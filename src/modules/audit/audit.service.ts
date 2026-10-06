import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditService {
  list() {
    return { module: 'audit', message: 'Module scaffold ready' };
  }
}
