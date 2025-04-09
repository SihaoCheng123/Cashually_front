import {createContext, ReactNode, useEffect, useState} from "react";
import {UserLoginResponse} from "../../domain/entities/User";
import {getUserUseCase} from "../../domain/useCases/userLocal/GetUser";
import {deleteUserUseCase} from "../../domain/useCases/userLocal/DeleteUser";

const UserContext = createContext<any>(null)

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserLoginResponse | null>(null)

    useEffect(() => {
        getUserSession()
    },[])

    const getUserSession = async () => {
        const newUser = await getUserUseCase()
        setUser(newUser)
    }

    const deleteUserSession = async () => {
        await deleteUserUseCase()
    }

    return (
        <UserContext.Provider value={{user, getUserSession, deleteUserSession}}>
            {children}
        </UserContext.Provider>
    )
}