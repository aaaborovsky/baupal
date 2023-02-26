import {ConfigFactory} from '@nestjs/config/dist/interfaces/config-factory.interface';

export interface AppConfigType {
    port: number;
}

export default (() => ({
    port: process.env.PORT ? parseInt(process.env.PORT) : undefined,
})) as ConfigFactory<AppConfigType>;
