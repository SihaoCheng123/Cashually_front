import {TransactionInterface} from "../entities/Activity";
import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

export interface IncomeRepository {
    makeIncome(income: TransactionInterface, slug: string): Promise<ApiResponse>;
    getMonthlyIncome(slug: string): Promise<ApiResponse>;
}