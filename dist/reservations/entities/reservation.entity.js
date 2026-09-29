var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from 'typeorm';
let Reservation = class Reservation {
    id;
    guestName;
    guestEmail;
    guestPhone;
    reservationDate;
    reservationTime;
    guestCount;
    specialRequest;
    status;
    createdAt;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reservation.prototype, "id", void 0);
__decorate([
    Column({ length: 120 }),
    __metadata("design:type", String)
], Reservation.prototype, "guestName", void 0);
__decorate([
    Column({ length: 160 }),
    __metadata("design:type", String)
], Reservation.prototype, "guestEmail", void 0);
__decorate([
    Column({ length: 40, nullable: true }),
    __metadata("design:type", String)
], Reservation.prototype, "guestPhone", void 0);
__decorate([
    Column({ type: 'date' }),
    __metadata("design:type", String)
], Reservation.prototype, "reservationDate", void 0);
__decorate([
    Column({ length: 20 }),
    __metadata("design:type", String)
], Reservation.prototype, "reservationTime", void 0);
__decorate([
    Column({ type: 'int' }),
    __metadata("design:type", Number)
], Reservation.prototype, "guestCount", void 0);
__decorate([
    Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Reservation.prototype, "specialRequest", void 0);
__decorate([
    Column({ length: 20, default: 'confirmed' }),
    __metadata("design:type", String)
], Reservation.prototype, "status", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Reservation.prototype, "createdAt", void 0);
Reservation = __decorate([
    Entity('reservations')
], Reservation);
export { Reservation };
//# sourceMappingURL=reservation.entity.js.map