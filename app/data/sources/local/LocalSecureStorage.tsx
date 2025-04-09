import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';
import {UserLoginResponse} from "../../../domain/entities/User";

export const LocalSecureStorage = () =>{
    const save = async (key:string, user: UserLoginResponse) => {
        try{
            return await RNSecureStorage.setItem(key, JSON.stringify(user), {accessible: ACCESSIBLE.WHEN_UNLOCKED})
        } catch(error){
            console.log("Error saving user:" + error)
        }
    }

    const getUser = async (key: string) =>{
        try{
            const user = await RNSecureStorage.getItem(key);
            if(!user){
                console.log("No user found");
            }else {
                return JSON.parse(user);
            }
        }catch(error){
            console.log("Error getting user:" + error)
        }
    }

    const deleteUser = async (key:string) =>{
        try{
            return await RNSecureStorage.removeItem(key);
        }catch(error){
            console.log("Error deleting user:" + error)
        }
    }

    return {
        save,
        getUser,
        deleteUser,
    }
}