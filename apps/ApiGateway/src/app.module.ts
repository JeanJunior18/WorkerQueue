import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatsappModule } from 'apps/ApiGateway/src/modules/whatsapp/whatsapp.module';
import { HookModule } from 'plugins/app/hook.module';

@Module({
  imports: [
    HookModule,
    WhatsappModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
})
export class AppModule {}
