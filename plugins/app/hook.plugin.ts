import { INestApplication } from '@nestjs/common';
import { Plugin, StaticImplements } from './plugin.interface';
import { SwaggerPlugin } from '../swagger/swagger.plugin';

@StaticImplements<Plugin>()
export class HookPlugin {
  static setup(app: INestApplication, serviceName: string) {
    SwaggerPlugin.setup(app, serviceName);
  }
}
