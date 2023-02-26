import { RequiredEntityData } from '@mikro-orm/core/typings';
import { Building } from '../entities/building.entity';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
} from 'class-validator';
import { BuildingType } from '../types';
import { AddressDto } from './address.dto';

export class BuildingDto implements RequiredEntityData<Building> {
  @IsObject()
  @IsNotEmpty()
  @IsNotEmptyObject()
  address: AddressDto;

  @IsEnum(BuildingType)
  @IsInt()
  @IsNotEmpty()
  type: BuildingType;
}
