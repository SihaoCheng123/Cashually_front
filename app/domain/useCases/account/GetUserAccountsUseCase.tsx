import {AccountRepositoryImpl} from "../../../data/repositories/AccountRepository";

const {getUserAccounts} = new AccountRepositoryImpl()

export const getUserAccountsUseCase = async (userSlug : string) => {
    return await getUserAccounts(userSlug)
}