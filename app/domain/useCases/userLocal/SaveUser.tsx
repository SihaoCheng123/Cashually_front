import {UserRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserLoginResponse} from "../../entities/User";

const {save} = new UserRepositoryImpl()

export const saveUserUseCase = async (user: UserLoginResponse) =>{
    return await save(user)
}