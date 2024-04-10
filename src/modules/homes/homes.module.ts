import { Module } from '@nestjs/common';
import { HomesController } from './homes.controller';

@Module({
  imports: [],
  controllers: [HomesController],
  providers: [],
})
export class HomesModule {}
