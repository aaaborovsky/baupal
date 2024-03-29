import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfigType } from './configuration';

@Injectable()
export class DatabaseConfigService implements DatabaseConfigType {
  constructor(private configService: ConfigService<DatabaseConfigType>) {}

  get dbName(): string {
    return this.configService.get('dbName', 'define db name', {
      infer: true,
    });
  }

  get dbHost(): string {
    return this.configService.get('dbHost', 'baupal', { infer: true });
  }

  get dbPort(): number {
    return this.configService.get('dbPort', 5432, { infer: true });
  }

  get user(): string {
    return this.configService.get('user', 'baupal', { infer: true });
  }

  get password(): string {
    return this.configService.get('password', 'please-fill-it!', {
      infer: true,
    });
  }
}
