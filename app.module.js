"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const houses_module_1 = require("./Houses/houses.module");
const mongoose_1 = require("@nestjs/mongoose");
const dotenv = require("dotenv");
const users_module_1 = require("./Users/users.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
dotenv.config();
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [houses_module_1.HouseModule, users_module_1.UserModule, mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL), cloudinary_module_1.CloudinaryModule]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map