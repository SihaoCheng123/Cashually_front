import {ExpenseRepository} from "../../domain/repositories/ExpenseRepository";
import {TransactionInterface} from "../../domain/entities/Activity";
import {ApiResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import Toast from "react-native-toast-message";
import {AxiosError} from "axios";

export class ExpenseRepositoryImpl implements ExpenseRepository {
    async makeExpense(expense: TransactionInterface, slug: string): Promise<ApiResponse> {
        try{
            const response = await ApiDelivery.post(`/make-expense/${slug}/`, expense)
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

    async getMonthlyExpense(slug: string): Promise<ApiResponse> {
        try{
            const response = await ApiDelivery.get(`/get-expense-month/${slug}/`)
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