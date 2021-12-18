import { Module } from '@nestjs/common';
import { CommonService } from './Common.service';

@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
