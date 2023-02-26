import {
  Cascade,
  Entity,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import {
  IsJSON,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { Building } from './building.entity';
import { Contact } from './contact.entity';

export type RenovationRequestId = number;

@Entity()
export class RenovationRequest {
  @PrimaryKey({ type: 'integer', autoincrement: true })
  id: RenovationRequestId;

  @Property()
  housingUnitsCount: number;

  @OneToOne({ cascade: [Cascade.ALL] })
  building: Building;

  @OneToOne({ cascade: [Cascade.ALL] })
  contact: Contact;

  @Property({ type: 'jsonb', nullable: true })
  metadata?: object;

  /**
   * TODO: add attachedFiles field. To upload construction plans, etc.
   * Store only file handlers (reference). File upload must be processed by separate FileUploadService into S3 for example.
   */
}
