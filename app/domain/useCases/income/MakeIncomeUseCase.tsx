import {IncomeRepositoryImpl} from "../../../data/repositories/IncomeRepository";
import {TransactionInterface} from "../../entities/Activity";
import {ApiResponse} from "../../../data/sources/remote/models/ResponseApiDelivery";

const {makeIncome} = new IncomeRepositoryImpl();

export const MakeIncomeUseCase = async (income: TransactionInterface, slug: string): Promise<ApiResponse> => {
    return await makeIncome(income, slug);
}