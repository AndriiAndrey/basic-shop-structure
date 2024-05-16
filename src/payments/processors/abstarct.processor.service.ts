import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ProcessorService {
  abstract readonly name: string;
  abstract createPayment<T>(): Promise<T>;
  abstract verifyPayment<T>(): Promise<T>;
}