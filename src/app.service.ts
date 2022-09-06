import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  findOne(id: string): any {
    this.client.emit('findOne', id);
    return `Hello World! ${id}`;
  }
}
