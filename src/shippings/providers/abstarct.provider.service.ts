import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ProviderService {
  abstract readonly name: string;
}