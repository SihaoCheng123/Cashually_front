import {TransactionInterface} from "../entities/Activity";
import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

export interface ExpenseRepository {
    makeExpense(expense: TransactionInterface, slug: string): Promise<ApiResponse>
    getMonthlyExpense(slug: string): Promise<ApiResponse>
}