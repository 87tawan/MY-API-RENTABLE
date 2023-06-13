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
exports.UsersServices = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../models/user.schema");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersServices = exports.UsersServices = class UsersServices {
    constructor(UserModel, jwtService) {
        this.UserModel = UserModel;
        this.jwtService = jwtService;
    }
    FindAll() {
        return this.UserModel.find();
    }
    async FindOneByEmail(email) {
        return this.UserModel.findOne({ email: email });
    }
    async Create(creatingUserData) {
        const user = new this.UserModel(creatingUserData);
        await user.save();
        return user;
    }
    async Login(login) {
        const userExist = await this.UserModel.findOne({ email: login.email });
        const payload = { name: userExist.name, _id: userExist.id };
        if (!userExist) {
            throw new Error("User not exist.");
        }
        const passwordCompare = await bcrypt.compare(login.password, userExist.password);
        if (!passwordCompare) {
            throw new Error("Password is not correct.");
        }
        return {
            token: this.jwtService.sign(payload),
        };
    }
};
exports.UsersServices = UsersServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], UsersServices);
//# sourceMappingURL=user.service.js.map