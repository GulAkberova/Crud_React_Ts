import { Supplier } from "../../models/supplier/Supplier";
import { BaseService } from "../base/BaseService";

export class SupplierService extends BaseService<Supplier>{
    constructor(){
        super('/suppliers')
    }
}