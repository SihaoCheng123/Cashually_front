import {UserRepositoryImpl} from "../../../data/repositories/UserLocalRepository";

const repository = new UserRepositoryImpl()

export const getUserUseCase = async () =>{
    return await repository.getUser()
}
