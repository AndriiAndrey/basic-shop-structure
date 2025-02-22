import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { ShippingsModule } from './shippings/shippings.module';

@Module({
  imports: [ProductsModule, CategoriesModule, CustomersModule, OrdersModule, PaymentsModule, ShippingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
