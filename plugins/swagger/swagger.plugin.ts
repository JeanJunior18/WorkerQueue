import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Plugin, StaticImplements } from 'plugins/app/plugin.interface';

@StaticImplements<Plugin>()
export class SwaggerPlugin {
  static setup(app: INestApplication, serviceName: string) {
    const options = new DocumentBuilder()
      .setTitle(serviceName)
      .setDescription(serviceName + ' api description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
