import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  guestName: string;

  @IsEmail()
  guestEmail: string;

  @IsString()
  @IsOptional()
  guestPhone?: string;

  @IsDateString()
  reservationDate: string;

  @IsString()
  @IsNotEmpty()
  reservationTime: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(12)
  guestCount: number;

  @IsString()
  @IsOptional()
  specialRequest?: string;
}
