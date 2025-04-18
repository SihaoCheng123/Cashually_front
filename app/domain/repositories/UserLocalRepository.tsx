import {UserLoginResponse} from "../entities/User";

export interface UserLocalRepository {
    save(user: UserLoginResponse): Promise<void>,
    getUser() : Promise<UserLoginResponse|null>,
    deleteUser() : Promise<void>,
}