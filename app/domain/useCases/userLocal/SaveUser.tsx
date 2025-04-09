import {UserRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserLoginResponse} from "../../entities/User";

const repository = new UserRepositoryImpl()

export const saveUserUseCase = async (user: UserLoginResponse) =>{
    return await repository.save(user)
}