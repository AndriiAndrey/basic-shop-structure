import { Module } from '@nestjs/common';
import { DhlModule } from './dhl/dhl.module';
import { UpsModule } from './ups/ups.module';

@Module({
  imports: [DhlModule, UpsModule]
})
export class ProvidersModule {}
