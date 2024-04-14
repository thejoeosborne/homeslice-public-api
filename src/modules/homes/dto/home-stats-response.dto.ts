import { ApiProperty } from '@nestjs/swagger';

export class HomeStatsResponseDto {
  @ApiProperty({
    description: 'The average days a home is listed before going off market.',
    example: (Math.random() * (150 - 50) + 50).toFixed(2),
    type: Number,
  })
  avg_days_listed: number;

  @ApiProperty({
    description: 'The average price per square foot of a home.',
    example: (Math.random() * (400 - 200) + 200).toFixed(2),
    type: Number,
  })
  avg_ppsf: number;

  @ApiProperty({
    description: 'The average square feet of a home.',
    example: (Math.random() * (3000 - 1500) + 1500).toFixed(2),
    type: Number,
  })
  avg_square_feet: number;

  @ApiProperty({
    description: 'The current date.',
    example: '2024-04-14',
    type: String,
  })
  date: string;

  @ApiProperty({
    description: 'The total number of homes listed.',
    example: 10000,
    type: Number,
  })
  listing_count: number;

  @ApiProperty({
    description: 'The median price per square foot of homes.',
    example: (Math.random() * (400 - 200) + 200).toFixed(2),
    type: Number,
  })
  median_ppsf: number;

  @ApiProperty({
    description: 'The median price of homes.',
    example: (Math.random() * (600000 - 500000) + 500000).toFixed(0),
    type: Number,
  })
  median_price: number;

  @ApiProperty({
    description: 'The median square feet of homes.',
    example: (Math.random() * (3000 - 1500) + 1500).toFixed(0),
    type: Number,
  })
  median_square_feet: number;
}
