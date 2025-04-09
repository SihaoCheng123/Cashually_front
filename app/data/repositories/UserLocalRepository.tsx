import {UserLocalRepository} from "../../domain/repositories/UserLocalRepository";
import {UserLoginResponse} from "../../domain/entities/User";
import {LocalSecureStorage} from "../sources/local/LocalSecureStorage";

export class UserRepositoryImpl implements UserLocalRepository {
    async save(user: UserLoginResponse): Promise<void> {
        const {save} = LocalSecureStorage()
        await save("user", user)
    }

    async getUser(): Promise<UserLoginResponse> {
        const {getUser} = LocalSecureStorage()
        return await getUser("user")
    }

    async deleteUser() : Promise<void> {
        const {deleteUser} = LocalSecureStorage()
        await deleteUser("user")
    }
}