import { Product } from "../../models/product/Product";
import { BaseService } from "../base/BaseService";

export class ProductService extends BaseService<Product>{
    constructor(){
        super('/products')
    }
}