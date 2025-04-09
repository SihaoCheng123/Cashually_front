import {UserRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserLoginResponse} from "../../entities/User";

const {getUser} = new UserRepositoryImpl()

export const getUserUseCase = async () =>{
    return await getUser()
}
