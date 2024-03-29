import { Catch, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigType } from './configuration';

@Injectable()
export class AppConfigService implements AppConfigType {
  constructor(private configService: ConfigService<AppConfigType>) {}

  get port(): number {
    return this.configService.get('port', 3000, { infer: true });
  }
}
