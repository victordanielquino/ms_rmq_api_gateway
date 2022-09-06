import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

import { RabbitMQ } from '../enums';

@Injectable()
export class ClientProxyMINEDU {
  // constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.AMQP_URL],
        queue: RabbitMQ.UserQue,
        queueOptions: {
          durable: false,
        },
      },
    });
  }
}
