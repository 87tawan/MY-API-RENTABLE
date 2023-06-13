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
exports.HouseSchema = exports.House = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let House = exports.House = class House {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "apresentation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], House.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], House.prototype, "bathrooms", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], House.prototype, "rooms", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], House.prototype, "pets", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], House.prototype, "created_at", void 0);
exports.House = House = __decorate([
    (0, mongoose_1.Schema)()
], House);
exports.HouseSchema = mongoose_1.SchemaFactory.createForClass(House);
//# sourceMappingURL=house.schema.js.map