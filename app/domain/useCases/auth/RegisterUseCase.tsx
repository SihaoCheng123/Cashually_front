import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserInterface} from "../../entities/User";
import {ApiResponse} from "../../../data/sources/remote/models/ResponseApiDelivery";

const {register} = new AuthRepositoryImpl()

export const RegisterUseCase = async (user: UserInterface): Promise<ApiResponse<UserInterface>> => {
    return await register(user)
}