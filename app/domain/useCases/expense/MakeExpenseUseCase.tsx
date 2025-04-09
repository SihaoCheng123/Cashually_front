import {ExpenseRepositoryImpl} from "../../../data/repositories/ExpenseRepository";
import {TransactionInterface} from "../../entities/Activity";

const {makeExpense} = new ExpenseRepositoryImpl()

export const MakeExpenseUseCase = async (expense: TransactionInterface, slug: string) =>{
    return await makeExpense(expense, slug)
}