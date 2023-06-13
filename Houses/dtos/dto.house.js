"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoHouse = void 0;
const class_validator_1 = require("class-validator");
class DtoHouse {
}
exports.DtoHouse = DtoHouse;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], DtoHouse.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(230),
    __metadata("design:type", String)
], DtoHouse.prototype, "apresentation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DtoHouse.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(5),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DtoHouse.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(["🏡", "🏦"]),
    __metadata("design:type", String)
], DtoHouse.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsIn)(["1", "2", "3", "4", "5"]),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DtoHouse.prototype, "bathrooms", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(["1", "2", "3", "4", "5"]),
    __metadata("design:type", Number)
], DtoHouse.prototype, "rooms", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DtoHouse.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DtoHouse.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsIn)(["Yes", "No"]),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DtoHouse.prototype, "pets", void 0);
//# sourceMappingURL=dto.house.js.map