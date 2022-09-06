import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxyMINEDU } from './common/proxy/client-proxy';

@Injectable()
export class AppService {
  //constructor(@Inject('ADMIN_SERVICE') private readonly client: ClientProxy) {}

  /*findOne(id: string): any {
        this.client.emit('findOne', id);
        return `Hello World! ${id}`;
    }*/

  constructor(private readonly _clientProxy: ClientProxyMINEDU) {}

  private _clientProxyUser = this._clientProxy.clientProxyUsers();

  findOne(id: string): any {
    this._clientProxyUser.emit('findOne', id);
    return `Hello World! ${id}`;
  }
}
