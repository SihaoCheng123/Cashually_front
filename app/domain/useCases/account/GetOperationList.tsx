import {AccountRepositoryImpl} from "../../../data/repositories/AccountRepository";
import {AccountInterface} from "../../entities/Account";

const {getOperationList} = new AccountRepositoryImpl()

export const getOperationListUseCase = async (account: AccountInterface) => {
    return await getOperationList(account)
}

