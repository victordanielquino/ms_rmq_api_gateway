import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { enviroments } from '../../minedu_sie_ms_users/src/common/enviroments';
import { UserModule } from './modules/users/user.module';
import config from './common/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env.dev',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        AMQP_URL: Joi.string().required(),
      }),
    }),
    /*ClientsModule.register([
      {
        name: 'ADMIN_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_URL],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),*/
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
