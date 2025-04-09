import {IncomeRepositoryImpl} from "../../../data/repositories/IncomeRepository";
import {ApiResponse} from "../../../data/sources/remote/models/ResponseApiDelivery";

const {getMonthlyIncome} = new IncomeRepositoryImpl()

export const GetMonthlyIncomeUseCase = async (slug: string): Promise<ApiResponse> => {
    return await getMonthlyIncome(slug);
}