import {UserInterface, UserLoginRequest, UserLoginResponse} from "../entities/User";
import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

export interface AuthRepository {
    register(user: UserInterface): Promise<ApiResponse<UserInterface>>;
    login(user: UserLoginRequest): Promise<ApiResponse<UserLoginResponse>>;
}