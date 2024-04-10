import { Module } from '@nestjs/common';
import { RatesController } from './rates.controller';

@Module({
  imports: [],
  controllers: [RatesController],
  providers: [],
})
export class RatesModule {}
