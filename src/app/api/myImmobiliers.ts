import { order } from "./orders";
import { photo } from "./photo";

export interface myImmobiliers {
    id?:string;
    localisation?:string;
    price?:bigint;
    category?:string;
    creation_date?:string;
    forSell?:boolean;
    status?:string;
    ownerName?:string;
    ownerAddress?:string;
    orders?: order[];
    photos?: photo[];

}