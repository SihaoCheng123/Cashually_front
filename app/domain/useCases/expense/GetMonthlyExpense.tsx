import {ExpenseRepositoryImpl} from "../../../data/repositories/ExpenseRepository";

const {getMonthlyExpense} = new ExpenseRepositoryImpl()

export const GetMonthlyExpenseUseCase = async (slug: string) =>{
    return await getMonthlyExpense(slug)
}