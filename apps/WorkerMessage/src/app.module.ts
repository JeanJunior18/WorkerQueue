import { Module } from '@nestjs/common';
import { WhatsappModule } from 'apps/WorkerMessage/src/modules/whatsapp/whatsapp.module';
import { HookModule } from 'plugins/app/hook.module';

@Module({
  imports: [HookModule, WhatsappModule],
})
export class AppModule {}
