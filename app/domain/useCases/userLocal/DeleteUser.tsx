import {UserRepositoryImpl} from "../../../data/repositories/UserLocalRepository";

const repository = new UserRepositoryImpl()

export const deleteUserUseCase = async () =>{
    return await repository.deleteUser()
}