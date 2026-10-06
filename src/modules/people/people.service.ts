import { Injectable } from '@nestjs/common';

@Injectable()
export class PeopleService {
  list() {
    return { module: 'people', message: 'Module scaffold ready' };
  }
}
