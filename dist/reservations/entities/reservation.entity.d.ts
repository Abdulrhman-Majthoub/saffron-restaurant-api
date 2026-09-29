export type ReservationStatus = 'confirmed' | 'cancelled';
export declare class Reservation {
    id: number;
    guestName: string;
    guestEmail: string;
    guestPhone?: string;
    reservationDate: string;
    reservationTime: string;
    guestCount: number;
    specialRequest?: string;
    status: ReservationStatus;
    createdAt: Date;
}
