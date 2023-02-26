import {
  Entity,
  Enum,
  OneToOne,
  PrimaryKey,
  Property,
  Cascade,
} from '@mikro-orm/core';
import {
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
} from 'class-validator';
import { Address } from './address.entity';
import { BuildingType } from '../types';

export type BuildingId = number;

@Entity()
export class Building {
  @PrimaryKey({ type: 'integer', autoincrement: true })
  id: BuildingId;

  @OneToOne({ cascade: [Cascade.ALL] })
  address: Address;

  @Enum()
  type: BuildingType;
}
