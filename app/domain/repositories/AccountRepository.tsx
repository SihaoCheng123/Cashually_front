import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {AccountInterface} from "../entities/Account";

export interface AccountRepository {
    createAccount(account: AccountInterface, userSlug: string): Promise<ApiResponse>
    getUserAccounts(userSlug: string): Promise<ApiResponse>
    getOperationList(account: AccountInterface): Promise<ApiResponse>
}