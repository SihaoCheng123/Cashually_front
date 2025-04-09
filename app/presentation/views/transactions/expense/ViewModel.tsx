import {TransactionInterface} from "../../../../domain/entities/Activity";
import {useState} from "react";
import {MakeExpenseUseCase} from "../../../../domain/useCases/expense/MakeExpenseUseCase";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import {GetMonthlyExpenseUseCase} from "../../../../domain/useCases/expense/GetMonthlyExpense";

const ExpenseViewModel = () =>{
    const [expenseList, setExpenseList] = useState<TransactionInterface[]>([])
    const [total, setTotal] = useState(0)

    const makeExpense = async (expense: TransactionInterface, slug: string) => {
        try{
            const response = await MakeExpenseUseCase(expense, slug)
            if (response.data){
                console.log("response data" + JSON.stringify(response.data.data))
            }
        }catch(error) {
            if (error instanceof Yup.ValidationError) {
                Toast.show({
                    type: "error",
                    text1: error ? error.message : "",
                    position: "bottom"
                })
            }
        }
    }

    const getMonthlyExpense = async (slug: string) => {
        try{
            const response = await GetMonthlyExpenseUseCase(slug)
            if (response.data){
                console.log("response data" + JSON.stringify(response.data.data))
                setExpenseList(response.data.data.list)
                setTotal(response.data.data.total_expense)
            }
        }catch(error) {
            if (error instanceof Yup.ValidationError) {
                Toast.show({
                    type: "error",
                    text1: error ? error.message : "",
                    position: "bottom"
                })
            }
        }
    }

    return{
        getMonthlyExpense,
        makeExpense,
        total,
        expenseList,
    }
}

export default ExpenseViewModel;