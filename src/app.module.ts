import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HomesModule } from './modules/homes/homes.module';
import { RatesModule } from './modules/rates/rates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    RatesModule,
    HomesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
