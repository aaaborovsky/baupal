import { RequiredEntityData } from '@mikro-orm/core/typings';
import { Contact } from '../entities/contact.entity';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class ContactDto implements RequiredEntityData<Contact> {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  comment: string;
}
