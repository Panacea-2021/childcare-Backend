import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  list() {
    return { module: 'auth', message: 'Module scaffold ready' };
  }
}
