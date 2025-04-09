import {UserInterface, UserLoginRequest, UserLoginResponse} from "../../domain/entities/User";
import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {ApiResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import Toast from "react-native-toast-message";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user:UserInterface): Promise<ApiResponse<UserInterface>> {
        try{
            const response = await ApiDelivery.post("/register/", user)
            Toast.show({
                type: "success",
                text1: response.data.success,
                position: "bottom"
            })
            return Promise.resolve(response)
        }catch (error){
            let e = (error as AxiosError<{error: string}>)
            if (e.response?.data) {
                console.log("Error:", e.response.data.error);
                Toast.show({
                    type: "error",
                    text1: e.response.data.error,
                    position: "bottom"
                })
                return e.response.data as ApiResponse;
            } else {
                console.log("Unknown error:", error);
                return Promise.resolve({ error: "Unknown error:" } as ApiResponse);
            }
        }
    }

    async login(user:UserLoginRequest): Promise<ApiResponse<UserLoginResponse>> {
        try{
            const response = await ApiDelivery.post("/login/", user)
            Toast.show({
                type: "success",
                text1: response.data.success,
                position: "bottom"
            })
            return Promise.resolve(response)
        }catch (error){
            let e = (error as AxiosError<{error: string}>)
            if (e.response?.data) {
                console.log("Error:", e.response.data.error);
                Toast.show({
                    type: "error",
                    text1: e.response.data.error,
                    position: "bottom"
                })
                return e.response.data as ApiResponse;
            } else {
                console.log("Unknown error:", error);
                return Promise.resolve({ error: "Unknown error:" } as ApiResponse);
            }
        }
    }
}