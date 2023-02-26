import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { IsNotEmpty, IsString } from 'class-validator';

export type AddressId = number;

@Entity()
@Unique({ properties: ['plz', 'address'] })
export class Address {
  @PrimaryKey({ type: 'integer', autoincrement: true })
  id: AddressId;

  @Property()
  plz: string;

  @Property()
  address: string;
}
