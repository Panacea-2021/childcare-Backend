import { Injectable } from '@nestjs/common';

@Injectable()
export class DailyCareService {
  list() {
    return { module: 'daily-care', message: 'Module scaffold ready' };
  }
}
