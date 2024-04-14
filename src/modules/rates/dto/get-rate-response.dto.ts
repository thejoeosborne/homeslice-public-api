import { ApiProperty } from '@nestjs/swagger';
import { LoanTerm } from '../enum/loan-term.enum';

export class GetRateResponseDto {
  @ApiProperty({
    description: 'The interest rate',
    example: 6.216,
    type: Number,
  })
  rate: number;

  @ApiProperty({
    description: 'The loan term',
    example: 'thirty_year',
    type: LoanTerm,
    enum: LoanTerm,
  })
  year: LoanTerm;

  @ApiProperty({
    description:
      'If the rate has descreased since the last check. Use this to show trend.',
    example: true,
    type: Boolean,
  })
  decrease: boolean;
}
