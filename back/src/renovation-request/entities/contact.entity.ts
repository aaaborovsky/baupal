import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export type ContactId = number;

@Entity()
export class Contact {
  @PrimaryKey({ type: 'integer', autoincrement: true })
  id: ContactId;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  phone: string;

  @Property()
  comment: string;
}
