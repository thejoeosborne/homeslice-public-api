import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TitlecasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) return value;
    const words = value.split(' ');
    const titleCasedWords = words.map((word: string) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return titleCasedWords.join(' ');
  }
}
