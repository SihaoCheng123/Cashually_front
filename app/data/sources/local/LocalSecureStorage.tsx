import {UserLoginResponse} from "../../../domain/entities/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalSecureStorage = () =>{
    const save = async (key:string, user: UserLoginResponse) => {
        try{
            return await AsyncStorage.setItem(key, JSON.stringify(user))
        } catch(error){
            console.log("Error saving user:" + error)
        }
    }

    const getUser = async (key: string) =>{
        try{
            const user = await AsyncStorage.getItem(key);
            if(!user){
                console.log("No user found");
                return null
            }else {
                return JSON.parse(user);
            }
        }catch(error){
            console.log("Error getting user:" + error)
            return null
        }
    }

    const deleteUser = async (key:string) =>{
        try{
            return await AsyncStorage.removeItem(key);
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