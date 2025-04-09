import {UserInterface, UserLoginRequest, UserLoginResponse} from "../../domain/entities/User";
import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {ApiResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user:UserInterface): Promise<ApiResponse<UserInterface>> {
        try{
            const response = await ApiDelivery.post("/register/", user)
            return Promise.resolve(response)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error:" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiResponse)
        }
    }

    async login(user:UserLoginRequest): Promise<ApiResponse<UserLoginResponse>> {
        try{
            const response = await ApiDelivery.post("/login/", user)
            return Promise.resolve(response)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error:" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiResponse)
        }
    }
}