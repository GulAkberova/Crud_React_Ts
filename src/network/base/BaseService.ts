import { ResponseModel } from "../../models/core/ResponseModel";
import { nortwindApiInstance } from "../core/northwindApiInstance";
export class BaseService<T>{
    private endpointUrl:string="";

    constructor(url:string){
        this.endpointUrl=url
    }

    async getAll(url:string=this.endpointUrl): Promise<ResponseModel>{
        
        try{
            let apiResponse=await nortwindApiInstance.get(url)
            
            let response :ResponseModel={
                data:apiResponse.data,
                status:true,
                statusCode:apiResponse.status,
                errorMessage:''
            }
            return response

        }
        catch(error:any){
            let response: ResponseModel={
                data:{},
                status:false,
                statusCode:error.response.status,
                errorMessage:error.message

            }
            return response

        }
    }

    async getAdd( data:T, url:string=this.endpointUrl): Promise<ResponseModel>{
      
        try{
            let apiResponse=await nortwindApiInstance.post(url,data)

            let response:ResponseModel={
                data:apiResponse.data,
                status:true,
                statusCode:apiResponse.status,
                errorMessage:''
            }
            return response

        }
        catch(error: any){
            let response:ResponseModel={
                data:null,
                status:false,
                statusCode: 0,
                errorMessage:error.message
            }
            return response

        }

    }
    async getDelete(id:T, url:string=this.endpointUrl): Promise<ResponseModel>{
      
        try{
            let apiResponse=await nortwindApiInstance.delete(url+ '/' + id)

            let response:ResponseModel={
                data:apiResponse.data,
                status:true,
                statusCode:apiResponse.status,
                errorMessage:''
            }
            return response

        }
        catch(error: any){
            let response:ResponseModel={
                data:{},
                status:false,
                statusCode: error.response.status,
                errorMessage:error.message
            }
            return response

        }

    }
}