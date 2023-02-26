import { Options } from '@mikro-orm/core';
import { DatabaseConfigService } from '../../../config/database/config.service';
import { NestFactory } from '@nestjs/core';
import { DatabaseConfigModule } from '../../../config/database/config.module';
import { RenovationRequest } from '../../../renovation-request/entities/renovation-request.entity';
import { Building } from '../../../renovation-request/entities/building.entity';
import { Address } from '../../../renovation-request/entities/address.entity';
import { Contact } from '../../../renovation-request/entities/contact.entity';

export const getMikroORMConfigSync = (
  dbConfigService: DatabaseConfigService,
): Options => {
  return {
    migrations: {
      path: './dist/providers/database/postgres/migrations',
      pathTs: './src/providers/database/postgres/migrations',
    },
    entities: [Address, Building, Contact, RenovationRequest],
    //disable auto, rely on migrations
    ensureIndexes: false,
    ensureDatabase: false,
    type: 'postgresql',
    discovery: {
      warnWhenNoEntities: true,
    },
    dbName: dbConfigService.dbName, // process.env.DB_NAME,
    host: dbConfigService.dbHost,
    port: dbConfigService.dbPort,
    user: dbConfigService.user,
    password: dbConfigService.password,
    implicitTransactions: false,
    schemaGenerator: {
      createForeignKeyConstraints: true,
    },
  };
};

const getMikroORMConfig = async (): Promise<Options> => {
  const app = await NestFactory.createApplicationContext(DatabaseConfigModule);
  return getMikroORMConfigSync(app.get(DatabaseConfigService));
};

export default getMikroORMConfig;
