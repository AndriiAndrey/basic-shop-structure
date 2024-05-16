import { Injectable } from '@nestjs/common';
import {ProviderService} from "../abstarct.provider.service";

@Injectable()
export class DhlService implements ProviderService {
  readonly name= "dhl";
}
