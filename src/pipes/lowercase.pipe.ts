import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LowercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value.toLowerCase();
  }
}
