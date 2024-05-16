import { Injectable } from '@nestjs/common';
import {ProviderService} from "../abstarct.provider.service";

@Injectable()
export class UpsService implements ProviderService{
  readonly name = "ups";
}
