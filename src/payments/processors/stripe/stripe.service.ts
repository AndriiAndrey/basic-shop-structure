import { Injectable } from '@nestjs/common';
import {ProcessorService} from "../abstarct.processor.service";

@Injectable()
export class StripeService implements ProcessorService{
  readonly name = 'stripe';

  createPayment<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }

  verifyPayment<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
