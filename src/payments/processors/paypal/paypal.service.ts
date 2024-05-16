import { Injectable } from '@nestjs/common';
import {ProcessorService} from "../abstarct.processor.service";

@Injectable()
export class PaypalService implements ProcessorService{
  readonly name = 'paypal';

  createPayment<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }

  verifyPayment<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
