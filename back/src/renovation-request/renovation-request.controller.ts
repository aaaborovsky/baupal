import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { RenovationRequestService } from './renovation-request.service';
import { CreateRenovationRequestDto } from './dto/create-renovation-request.dto';
import {
  RenovationRequest,
  RenovationRequestId,
} from './entities/renovation-request.entity';
import { ValidaeNumberPipe } from '../common/pipes/validae-number.pipe';

@Controller('renovation-request')
export class RenovationRequestController {
  constructor(
    private readonly renovationRequestService: RenovationRequestService,
  ) {}

  @Post()
  create(
    @Body() createRenovationRequestDto: CreateRenovationRequestDto,
  ): Promise<RenovationRequest> {
    return this.renovationRequestService.create(createRenovationRequestDto);
  }

  @Get()
  findAll(): Promise<RenovationRequest[]> {
    return this.renovationRequestService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ValidaeNumberPipe) id: RenovationRequestId,
  ): Promise<RenovationRequest> {
    const request = await this.renovationRequestService.findOne(id);
    if (!request) {
      throw new NotFoundException();
    }
    return request;
  }

  /**
   * PATCH, PUT, DELETE intentionally missed here,
   * cause RenovationRequest is not something deletable/modifiable by frontend
   * according to common business requirements
   */
}
