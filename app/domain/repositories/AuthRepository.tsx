import {UserInterface, UserLoginRequest} from "../entities/User";
import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

export interface AuthRepository {
    register(user: UserInterface): Promise<ApiResponse>;
    login(user: UserLoginRequest): Promise<ApiResponse>;
}