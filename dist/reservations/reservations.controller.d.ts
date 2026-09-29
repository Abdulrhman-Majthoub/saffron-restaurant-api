import { CreateReservationDto } from './dto/create-reservation.dto.js';
import { UpdateReservationDto } from './dto/update-reservation.dto.js';
import { ReservationsService } from './reservations.service.js';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    create(createReservationDto: CreateReservationDto): Promise<import("./entities/reservation.entity.js").Reservation>;
    findAll(): Promise<import("./entities/reservation.entity.js").Reservation[]>;
    update(id: number, updateReservationDto: UpdateReservationDto): Promise<import("./entities/reservation.entity.js").Reservation>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
