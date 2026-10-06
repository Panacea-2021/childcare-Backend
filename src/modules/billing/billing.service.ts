import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  list() {
    return { module: 'billing', message: 'Module scaffold ready' };
  }
}
