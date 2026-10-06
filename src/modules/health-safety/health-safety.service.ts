import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthSafetyService {
  list() {
    return { module: 'health-safety', message: 'Module scaffold ready' };
  }
}
