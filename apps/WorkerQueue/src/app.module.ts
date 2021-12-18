import { Module } from '@nestjs/common';
import { WhatsappModule } from 'apps/WorkerQueue/src/modules/whatsapp/whatsapp.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WhatsappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
