import { RequiredEntityData } from '@mikro-orm/core/typings';
import { Building } from '../entities/building.entity';
import {
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
} from 'class-validator';
import { Address } from '../entities/address.entity';
import { BuildingType } from '../types';
import { Property } from '@mikro-orm/core';

export class AddressDto implements RequiredEntityData<Address> {
  @IsString()
  @IsNotEmpty()
  plz: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
