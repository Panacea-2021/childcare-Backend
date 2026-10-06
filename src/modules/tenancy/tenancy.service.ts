import { Injectable } from '@nestjs/common';

@Injectable()
export class TenancyService {
  list() {
    return { module: 'tenancy', message: 'Module scaffold ready' };
  }
}
