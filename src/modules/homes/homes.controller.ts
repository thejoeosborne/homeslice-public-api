import {
  Controller,
  Get,
  HttpException,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TitlecasePipe } from 'src/pipes/titlecase.pipe';
import { HomeStatsResponseDto } from './dto/home-stats-response.dto';

@ApiTags('Homes (Utah Only)')
@Controller('homes')
export class HomesController {
  constructor(private readonly configService: ConfigService) {}

  @ApiOkResponse({
    description: 'The data structure that this endpoint returns.',
    type: HomeStatsResponseDto,
  })
  @ApiOperation({
    summary: 'Get live home stats for Utah.',
    description:
      'Get live home stats for Utah. Optionally pass in a city or zip code to drill down. If both a city and zip are passed in, stats for both are combined and returned.',
  })
  @ApiQuery({
    name: 'city',
    example: 'Salt Lake City',
    required: false,
    type: String,
    description:
      'Drill down on stats for a specific city. If both a city and zip are passed in, stats for both are combined and returned.',
  })
  @ApiQuery({
    name: 'zip',
    example: '84606',
    required: false,
    type: Number,
    description:
      'Drill down on stats for a specific zip code. If both a city and zip are passed in, stats for both are combined and returned.',
    schema: {
      minimum: 10000,
      maximum: 99999,
      minLength: 5,
      maxLength: 5,
    },
  })
  @Get()
  async get(
    @Query('city', TitlecasePipe) city?: string,
    @Query('zip') zip?: number,
  ) {
    try {
      const today = new Date().toISOString().split('T')[0];

      const params = new URLSearchParams({
        start_date: today,
        end_date: today,
      });
      if (city) {
        params.append('cities', city);
      }
      if (zip) {
        params.append('zip_codes', zip.toString());
      }

      const endpoint = `${this.configService.get('LIVE_HOME_STATS_ENDPOINT')}?${params.toString()}`;
      const results = await fetch(endpoint).then((res) => res.json());
      if (results) {
        return results?.[0];
      } else {
        throw new NotFoundException('No data found');
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
