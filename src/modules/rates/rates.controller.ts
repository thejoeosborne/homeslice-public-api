import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { LowercasePipe } from 'src/pipes/lowercase.pipe';
import { GetRateResponseDto } from './dto/get-rate-response.dto';

@ApiTags('Interest Rates')
@Controller('rates')
export class RatesController {
  constructor(private readonly configService: ConfigService) {}

  @ApiOkResponse({
    description: 'The data structure that this endpoint returns.',
    type: GetRateResponseDto,
  })
  @ApiOperation({
    summary: 'Get live interest rates for a given state.',
    description:
      'Get live interest rates for a given state. Pass in a query param with a 2 letter state code.',
  })
  @ApiQuery({
    name: 'state',
    example: 'CA',
    required: true,
    type: String,
    description: 'The 2 letter state code to get rates for',
  })
  @Get()
  async getRates(@Query('state', LowercasePipe) state: string) {
    try {
      const endpoint = `${this.configService.get('SINGLE_RATE_ENDPOINT')}?state=${state}`;
      const data = await fetch(endpoint).then((res) => res.json());
      return new GetRateResponseDto({ results: data });
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
