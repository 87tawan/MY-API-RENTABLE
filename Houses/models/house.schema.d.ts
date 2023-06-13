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
import { HydratedDocument } from 'mongoose';
export type HouseDocument = HydratedDocument<House>;
export declare class House {
    images: string;
    title: string;
    apresentation: string;
    description: string;
    price: number;
    type: string;
    bathrooms: number;
    rooms: number;
    city: string;
    state: string;
    pets: string;
    created_at: Date;
}
export declare const HouseSchema: import("mongoose").Schema<House, import("mongoose").Model<House, any, any, any, import("mongoose").Document<unknown, any, House> & Omit<House & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, House, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<House>> & Omit<import("mongoose").FlatRecord<House> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
