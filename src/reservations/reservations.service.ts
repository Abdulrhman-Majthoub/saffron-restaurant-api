import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReservationDto } from "./dto/create-reservation.dto.js";
import { UpdateReservationDto } from "./dto/update-reservation.dto.js";
import { Reservation } from "./entities/reservation.entity.js";

const MAX_GUESTS_PER_TIME_SLOT = 20;

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationsRepository: Repository<Reservation>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const reservationsForTimeSlot = await this.reservationsRepository.find({
      where: {
        reservationDate: createReservationDto.reservationDate,
        reservationTime: createReservationDto.reservationTime,
        status: "confirmed",
      },
    });

    const bookedGuests = reservationsForTimeSlot.reduce(
      (total, reservation) => total + reservation.guestCount,
      0,
    );

    const remainingSeats = MAX_GUESTS_PER_TIME_SLOT - bookedGuests;

    if (createReservationDto.guestCount > remainingSeats) {
      throw new BadRequestException(
        `This time slot has only ${remainingSeats} seats remaining.`,
      );
    }

    const reservation = this.reservationsRepository.create({
      ...createReservationDto,
      status: "confirmed",
    });

    return this.reservationsRepository.save(reservation);
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationsRepository.find({
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: number): Promise<Reservation> {
    const reservation = await this.reservationsRepository.findOneBy({ id });

    if (!reservation) {
      throw new NotFoundException(`Reservation #${id} was not found.`);
    }

    return reservation;
  }

  async update(
    id: number,
    updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    const reservation = await this.findOne(id);

    Object.assign(reservation, updateReservationDto);

    return this.reservationsRepository.save(reservation);
  }

  async remove(id: number): Promise<{ message: string }> {
    const reservation = await this.findOne(id);

    await this.reservationsRepository.remove(reservation);

    return { message: `Reservation #${id} was deleted.` };
  }
}