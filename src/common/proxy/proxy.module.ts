import { Module } from '@nestjs/common';

import { ClientProxyMINEDU } from './client-proxy';

@Module({
  providers: [ClientProxyMINEDU],
  exports: [ClientProxyMINEDU],
})
export class ProxyModule {}
