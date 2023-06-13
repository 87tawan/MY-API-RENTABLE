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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousesServices = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const house_schema_1 = require("../models/house.schema");
const cloudinary_service_1 = require("../../cloudinary/cloudinary.service");
let HousesServices = exports.HousesServices = class HousesServices {
    constructor(HouseModel, cloudinary) {
        this.HouseModel = HouseModel;
        this.cloudinary = cloudinary;
    }
    FindAll() {
        return this.HouseModel.find();
    }
    async Create(file, newHouseData) {
        console.log(file);
        const fileResponse = await this.cloudinary.uploadImage(file);
        if (fileResponse.size > 1000) {
            throw new Error("errado");
        }
        const house = new this.HouseModel(Object.assign({ images: fileResponse.secure_url }, newHouseData));
        await house.save();
        return house;
    }
    async GetById(id) {
        const user = await this.HouseModel.findById({ _id: id });
        return user;
    }
};
exports.HousesServices = HousesServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(house_schema_1.House.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        cloudinary_service_1.CloudinaryService])
], HousesServices);
//# sourceMappingURL=houses.service.js.map