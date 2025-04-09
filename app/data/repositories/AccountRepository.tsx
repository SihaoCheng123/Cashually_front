import {AccountRepository} from "../../domain/repositories/AccountRepository";
import {AccountInterface} from "../../domain/entities/Account";
import {ApiResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import Toast from "react-native-toast-message";

export class AccountRepositoryImpl implements AccountRepository {
    async createAccount(account: AccountInterface, userSlug: string): Promise<ApiResponse> {
        try{
            const response = await ApiDelivery.post(`/create-account/${userSlug}/`, account)
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

    async getUserAccounts(userSlug: string): Promise<ApiResponse> {
        try {
            const response = await ApiDelivery.get(`/get-all-accounts/${userSlug}`);
            return Promise.resolve(response)
        } catch (error){
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

    async getOperationList(account: AccountInterface): Promise<ApiResponse> {
        try {
            const response = await ApiDelivery.get(`/get-operation-list/${account.slug}`);
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