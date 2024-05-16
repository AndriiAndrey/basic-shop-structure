import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { ProcessorsModule } from './processors/processors.module';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [ProcessorsModule],
})
export class PaymentsModule {}
