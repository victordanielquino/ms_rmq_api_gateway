import { Injectable } from '@nestjs/common';
import { ClientProxyMINEDU } from '../../common/proxy/client-proxy';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly _clientProxy: ClientProxyMINEDU) {}

  private _clientProxyUser = this._clientProxy.clientProxyUsers();

  findOne(id: string): any {
    console.log('prueba....');
    return this._clientProxyUser.emit('findOne', id);
    // return `Hello World! ${id}`;
  }
}
