import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserLoginRequest, UserLoginResponse} from "../../entities/User";
import {ApiResponse} from "../../../data/sources/remote/models/ResponseApiDelivery";

const {login} = new AuthRepositoryImpl();

export const loginUseCase= async (user: UserLoginRequest): Promise<ApiResponse<UserLoginResponse>> => {
    return await login(user);
}