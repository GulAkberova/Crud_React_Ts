import { BaseModel } from "../core/BaseModel";

export interface Supplier extends BaseModel{
    companyName:string;
    contactName:string;
    contactTitle:string;
}