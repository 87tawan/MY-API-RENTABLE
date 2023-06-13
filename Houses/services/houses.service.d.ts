/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { DtoHouse } from '../dtos/dto.house';
import { House } from "src/Houses/models/house.schema";
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class HousesServices {
    private HouseModel;
    private cloudinary;
    constructor(HouseModel: Model<House>, cloudinary: CloudinaryService);
    FindAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, House> & Omit<House & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, House> & Omit<House & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, House, "find">;
    Create(file: Express.Multer.File, newHouseData: DtoHouse): Promise<import("mongoose").Document<unknown, {}, House> & Omit<House & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    GetById(id: string): Promise<import("mongoose").Document<unknown, {}, House> & Omit<House & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
