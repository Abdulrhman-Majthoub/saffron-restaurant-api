import { Repository } from "typeorm";
import { CreateReservationDto } from "./dto/create-reservation.dto.js";
import { UpdateReservationDto } from "./dto/update-reservation.dto.js";
import { Reservation } from "./entities/reservation.entity.js";
export declare class ReservationsService {
    private readonly reservationsRepository;
    constructor(reservationsRepository: Repository<Reservation>);
    create(createReservationDto: CreateReservationDto): Promise<Reservation>;
    findAll(): Promise<Reservation[]>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
