var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Reservation } from "./entities/reservation.entity.js";
const MAX_GUESTS_PER_TIME_SLOT = 20;
let ReservationsService = class ReservationsService {
    reservationsRepository;
    constructor(reservationsRepository) {
        this.reservationsRepository = reservationsRepository;
    }
    async create(createReservationDto) {
        const reservationsForTimeSlot = await this.reservationsRepository.find({
            where: {
                reservationDate: createReservationDto.reservationDate,
                reservationTime: createReservationDto.reservationTime,
                status: "confirmed",
            },
        });
        const bookedGuests = reservationsForTimeSlot.reduce((total, reservation) => total + reservation.guestCount, 0);
        const remainingSeats = MAX_GUESTS_PER_TIME_SLOT - bookedGuests;
        if (createReservationDto.guestCount > remainingSeats) {
            throw new BadRequestException(`This time slot has only ${remainingSeats} seats remaining.`);
        }
        const reservation = this.reservationsRepository.create({
            ...createReservationDto,
            status: "confirmed",
        });
        return this.reservationsRepository.save(reservation);
    }
    async findAll() {
        return this.reservationsRepository.find({
            order: { createdAt: "DESC" },
        });
    }
    async findOne(id) {
        const reservation = await this.reservationsRepository.findOneBy({ id });
        if (!reservation) {
            throw new NotFoundException(`Reservation #${id} was not found.`);
        }
        return reservation;
    }
    async update(id, updateReservationDto) {
        const reservation = await this.findOne(id);
        Object.assign(reservation, updateReservationDto);
        return this.reservationsRepository.save(reservation);
    }
    async remove(id) {
        const reservation = await this.findOne(id);
        await this.reservationsRepository.remove(reservation);
        return { message: `Reservation #${id} was deleted.` };
    }
};
ReservationsService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Reservation)),
    __metadata("design:paramtypes", [Repository])
], ReservationsService);
export { ReservationsService };
//# sourceMappingURL=reservations.service.js.map