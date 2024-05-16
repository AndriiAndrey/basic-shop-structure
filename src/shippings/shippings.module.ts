import { Module } from '@nestjs/common';
import { ShippingsService } from './shippings.service';
import { ShippingsController } from './shippings.controller';
import { ProvidersModule } from './providers/providers.module';

@Module({
  controllers: [ShippingsController],
  providers: [ShippingsService],
  imports: [ProvidersModule],
})
export class ShippingsModule {}
