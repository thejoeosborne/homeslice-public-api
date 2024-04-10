import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('HomeSlice Public API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  @Get('rates')
  getHello(@Query('state') state: string): string {
    return this.appService.getHello();
  }
}
