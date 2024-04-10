import { Controller, Get, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LowercasePipe } from 'src/pipes/lowercase.pipe';

@ApiTags('Interest Rates')
@Controller('rates')
export class RatesController {
  constructor(private readonly configService: ConfigService) {}

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
    const endpoint = `${this.configService.get('SINGLE_RATE_ENDPOINT')}?state=${state}`;
    return await fetch(endpoint).then((res) => res.json());
  }
}
