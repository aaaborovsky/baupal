import { Module } from '@nestjs/common';
import { RenovationRequestService } from './renovation-request.service';
import { RenovationRequestController } from './renovation-request.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DatabaseProviderModule } from '../providers/database/postgres/provider.module';
import { RenovationRequest } from './entities/renovation-request.entity';
import { Contact } from './entities/contact.entity';
import { Building } from './entities/building.entity';
import { Address } from './entities/address.entity';

@Module({
  imports: [
    DatabaseProviderModule,
    MikroOrmModule.forFeature([Address, Building, Contact, RenovationRequest]),
  ],
  controllers: [RenovationRequestController],
  providers: [RenovationRequestService],
})
export class RenovationRequestModule {}
