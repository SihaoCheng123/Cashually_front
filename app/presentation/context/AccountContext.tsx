import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {AccountInterface} from "../../domain/entities/Account";

interface AccountContextProps {
    localAccounts: AccountInterface[]
    setLocalAccounts: Dispatch<SetStateAction<AccountInterface[]>>;
}
const AccountContext = createContext<AccountContextProps| undefined>(undefined)
interface AccountProviderProps {
    children: ReactNode;
}

export const AccountProvider = ({children}: AccountProviderProps) => {
    const [localAccounts, setLocalAccounts] = useState<AccountInterface[]>([]);

    return (
        <AccountContext.Provider value={{ localAccounts, setLocalAccounts }}>
            {children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = () => {
    const context = useContext(AccountContext);
    if (!context) {
        throw new Error('useAccountContext must be used within an AccountProvider');
    }
    return context;
};