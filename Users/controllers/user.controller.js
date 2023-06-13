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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const dto_user_1 = require("../dtos/dto.user");
let UsersController = exports.UsersController = class UsersController {
    constructor(users) {
        this.users = users;
    }
    FindAll() {
        return this.users.FindAll();
    }
    FindOneByEmail(email) {
        return this.users.FindOneByEmail(email);
    }
    Create(creatingUserData) {
        return this.users.Create(creatingUserData);
    }
    Login(login) {
        return this.users.Login(login);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "FindAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_user_1.DtoFindOneByEmail]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "FindOneByEmail", null);
__decorate([
    (0, common_1.Post)("/register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_user_1.DtoUser]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "Create", null);
__decorate([
    (0, common_1.Post)("/login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_user_1.DtoUserLogin]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "Login", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [user_service_1.UsersServices])
], UsersController);
//# sourceMappingURL=user.controller.js.map