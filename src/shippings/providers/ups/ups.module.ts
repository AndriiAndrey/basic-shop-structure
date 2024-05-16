import { Module } from '@nestjs/common';
import { UpsService } from './ups.service';

@Module({
  providers: [UpsService]
})
export class UpsModule {}
