var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
let JobApplicationEntity = class JobApplicationEntity {
    id;
    company;
    position;
    status;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], JobApplicationEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], JobApplicationEntity.prototype, "company", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], JobApplicationEntity.prototype, "position", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], JobApplicationEntity.prototype, "status", void 0);
JobApplicationEntity = __decorate([
    Entity('job_applications')
], JobApplicationEntity);
export { JobApplicationEntity };
//# sourceMappingURL=job-application.entity.js.map