import { RenovationRequest } from '../entities/renovation-request.entity';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { RequiredEntityData } from '@mikro-orm/core/typings';
import { ContactDto } from './contact.dto';
import { BuildingDto } from './building.dto';

export class CreateRenovationRequestDto
  implements RequiredEntityData<RenovationRequest>
{
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  housingUnitsCount: number;

  @IsObject()
  @IsNotEmpty()
  @IsNotEmptyObject()
  building: BuildingDto;

  @IsObject()
  @IsNotEmpty()
  @IsNotEmptyObject()
  contact: ContactDto;

  @IsObject()
  @IsOptional()
  metadata: object;
}
