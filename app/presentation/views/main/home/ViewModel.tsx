import {getUserAccountsUseCase} from "../../../../domain/useCases/account/GetUserAccountsUseCase";
import * as Yup from "yup";
import Toast from "react-native-toast-message";
import {AccountInterface} from "../../../../domain/entities/Account";
import {useContext, useState} from "react";
import {createAccountUseCase} from "../../../../domain/useCases/account/CreateAccountUseCase";
import {getOperationListUseCase} from "../../../../domain/useCases/account/GetOperationList";
import {TransactionInterface} from "../../../../domain/entities/Activity";
import {useAccountContext} from "../../../context/AccountContext";

const HomeViewModel = () =>{

    const [accounts, setAccounts] = useState<AccountInterface[]>([]);
    const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
    const {setLocalAccounts} = useAccountContext()

    const getAccounts = async (slug: string) => {
        try{
            const response = await getUserAccountsUseCase(slug)
            if (response.data){
                console.log("response data" + JSON.stringify(response.data.data))
                setAccounts(response.data.data)
                setLocalAccounts(response.data.data)
            }
        }catch(error){
            if (error instanceof Yup.ValidationError) {
                Toast.show({
                    type: "error",
                    text1: error ? error.message : "",
                    position: "bottom"
                })
            }
        }
    }

    const createAccount = async (account: AccountInterface, slug: string) => {
        try{
            const response = await createAccountUseCase(account, slug)
            if (response.data) {
                console.log("response data" + JSON.stringify(response.data.data))
                setTransactions(response.data.data)
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

    const getOperationList = async (account: AccountInterface) => {
        try{
            const response = await getOperationListUseCase(account)
            if (response.data) {
                console.log("response data" + JSON.stringify(response.data.data))
                setTransactions(response.data.data)
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
        accounts,
        getAccounts,
        createAccount,
        getOperationList,
        transactions,
    }
}

export default HomeViewModel;