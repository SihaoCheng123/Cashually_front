import {UserRepositoryImpl} from "../../../data/repositories/UserLocalRepository";

const {deleteUser} = new UserRepositoryImpl()

export const deleteUserUseCase = async () =>{
    return await deleteUser()
}