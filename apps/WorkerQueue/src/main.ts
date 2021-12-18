import { NestFactory } from '@nestjs/core';
import { HookPlugin } from 'plugins/app/hook.plugin';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  HookPlugin.setup(app, process.env.APP_NAME);
  await app.listen(3000);
}
bootstrap();
