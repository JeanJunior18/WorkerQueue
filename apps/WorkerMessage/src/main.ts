import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { HookPlugin } from 'plugins/app/hook.plugin';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  HookPlugin.setup(app, process.env.APP_NAME);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: [process.env.KAFKA_URL],
      },
    },
  });

  app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
