import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Homes (Utah Only)')
@Controller('homes')
export class HomesController {
  @Get()
  async get() {
    return 'Homes';
  }
}
