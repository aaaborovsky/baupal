import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { RenovationRequestModule } from './renovation-request/renovation-request.module';

@Module({
  imports: [AppConfigModule, RenovationRequestModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
