import {AccountRepositoryImpl} from "../../../data/repositories/AccountRepository";
import {AccountInterface} from "../../entities/Account";

const {createAccount} = new AccountRepositoryImpl()

export const createAccountUseCase = async (account: AccountInterface, userSlug: string) => {
    return await createAccount(account, userSlug)
}