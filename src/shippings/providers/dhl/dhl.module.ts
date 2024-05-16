import { Module } from '@nestjs/common';
import { DhlService } from './dhl.service';

@Module({
  providers: [DhlService]
})
export class DhlModule {}
