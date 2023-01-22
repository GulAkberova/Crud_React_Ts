import { Category } from "../../models/category/Category";
import { BaseService } from "../base/BaseService";

export class CategoryService extends BaseService<Category>{
    constructor(){
        super("/categories");
    }

}