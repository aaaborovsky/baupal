import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class ValidaeNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (metadata.type !== 'param') {
      return value;
    }
    const id = Number(value);
    if (Number.isNaN(id)) {
      throw new BadRequestException(
        `wrong "${metadata.data}" parameter value, must be a number`,
      );
    }
    return id;
  }
}
