import {TransactionInterface} from "../../../../domain/entities/Activity";
import {MakeIncomeUseCase} from "../../../../domain/useCases/income/MakeIncomeUseCase";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import {GetMonthlyIncomeUseCase} from "../../../../domain/useCases/income/GetMonthlyIncome";
import {useState} from "react";

const IncomeViewModel = () => {

    const [incomeList, setIncomeList] = useState<TransactionInterface[]>([]);
    const [total, setTotal] = useState(0);

    const makeIncome = async (income: TransactionInterface, slug: string) => {
        try{
            const response = await MakeIncomeUseCase(income, slug);
            if (response.data) {
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
    const getMonthlyIncome = async (slug: string) => {
        try{
            const response = await GetMonthlyIncomeUseCase(slug);
            if (response.data) {
                console.log("response data" + JSON.stringify(response.data.data))
                setIncomeList(response.data.data.list)
                setTotal(response.data.data.total_income)
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
        getMonthlyIncome,
        makeIncome,
        incomeList,
        total
    }
}

export default IncomeViewModel;