import { Injectable } from '@nestjs/common';
import { CreateRenovationRequestDto } from './dto/create-renovation-request.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import {
  RenovationRequest,
  RenovationRequestId,
} from './entities/renovation-request.entity';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class RenovationRequestService {
  constructor(
    @InjectRepository(RenovationRequest)
    private readonly renovationRequestRepo: EntityRepository<RenovationRequest>,
  ) {}

  async create(
    createRenovationRequestDto: CreateRenovationRequestDto,
  ): Promise<RenovationRequest> {
    const entity = this.renovationRequestRepo.create(
      createRenovationRequestDto,
    );
    /**
     * TODO: handle an respond with well shaped application level Error instead of:
     * previous error: insert into "address" ("plz", "address") values ('plz1', 'string') returning "id" - duplicate key value violates unique constraint "address_plz_address_unique"
     */
    await this.renovationRequestRepo.persistAndFlush(entity);
    return entity;
  }

  findAll(): Promise<RenovationRequest[]> {
    return this.renovationRequestRepo.findAll();
  }

  findOne(id: RenovationRequestId): Promise<RenovationRequest | null> {
    return this.renovationRequestRepo.findOne(id);
  }
}
