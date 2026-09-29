import { IsIn, IsOptional } from 'class-validator';

export class UpdateReservationDto {
  @IsOptional()
  @IsIn(['confirmed', 'cancelled'])
  status?: 'confirmed' | 'cancelled';
}
