import { order } from "./orders";

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
    orders?:order[];

}