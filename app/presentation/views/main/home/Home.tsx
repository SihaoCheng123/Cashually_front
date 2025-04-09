import {Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {AccountCard} from "../../../components/accounts/Card";
import {AccountInterface} from "../../../../domain/entities/Account";
import {ActivityItem} from "../../../components/activity/ActivityItem";
import {useContext, useEffect, useState} from "react";
import {AddAccountModal} from "../../../components/modals/AddAccount";
import stylesHome from "./StylesHome";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import HomeViewModel from "./ViewModel";
import {UserContext} from "../../../context/UserContext";
import Toast from "react-native-toast-message";

const HomeScreen = ({navigation}:PropsStackNavigation) => {
    const {accounts, getAccounts, createAccount, transactions, getOperationList} = HomeViewModel()
    const {user} = useContext(UserContext)
    const [localAccount, setLocalAccount] = useState<AccountInterface[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => {
        setIsModalVisible(true);
    };

    const handleCardChange = async (index: number) => {
        if (accounts.length > 0) {
            await getOperationList(accounts[index]);
        }
    }

    useEffect(() => {
        const handleAccountFetching  = async () =>{
            if (user && user?.slug){
                await getAccounts(user.slug)
            }
        }
       handleAccountFetching()
    },[user.slug])

    useEffect(() => {
        setLocalAccount(accounts)
    }, [accounts]);

    const handleModalSubmit = async (modalData:{name: string, balance: number}) => {
        if (user && user?.slug){
            const accountData: AccountInterface = {
                ...modalData,
            }
            console.log(accountData)
            await createAccount(accountData, user.slug)
            await getAccounts(user.slug)
        }

    }

    return (
        <SafeAreaView style={stylesHome.mainContainer}>

            <View style={stylesHome.topContainer}>
                <Text style={stylesHome.walletText}>My wallet</Text>
                <Pressable>
                    <Image source={require('../../../../../assets/icons/bell_icon.png')}/>
                </Pressable>
            </View>
            <View style={stylesHome.cardsContainer}>
                <AccountCard accounts={accounts} openModal={openModal} onCardChange={handleCardChange}/>
            </View>
            <View style={stylesHome.sectionContainer}>
                <View style={stylesHome.eachSection}>
                    <Pressable onPress={() => navigation.navigate("IncomeScreen")}>
                        <View style={{...stylesHome.sectionBtn, backgroundColor: AppTheme.colors.primary}}>
                            <Image source={require('../../../../../assets/icons/income_icon.png')}
                                   style={{zIndex: 999}}/>
                            <View style={{...stylesHome.background, backgroundColor: AppTheme.colors.white, opacity: 0.4}}></View>
                        </View>
                    </Pressable>
                    <Text style={stylesHome.sectionText}>Income</Text>
                </View>

                <View style={stylesHome.eachSection}>
                    <Pressable onPress={() => navigation.navigate("SavingScreen")}>
                        <View style={{...stylesHome.sectionBtn, backgroundColor: AppTheme.colors.secondary}}>
                            <Image source={require('../../../../../assets/icons/saving_icon.png')}
                                   style={{zIndex: 999}}/>
                            <View style={{...stylesHome.background, backgroundColor: AppTheme.colors.white, opacity: 0.4}}></View>
                        </View>
                    </Pressable>
                    <Text style={stylesHome.sectionText}>Savings</Text>
                </View>

                <View style={stylesHome.eachSection}>
                    <Pressable onPress={() => navigation.navigate("ExpenseScreen")}>
                        <View style={{...stylesHome.sectionBtn, backgroundColor: AppTheme.colors.tertiary}}>
                            <Image source={require('../../../../../assets/icons/expense_icon.png')}
                                   style={{zIndex: 999}}/>
                            <View style={{...stylesHome.background, backgroundColor: AppTheme.colors.white, opacity: 0.5}}></View>
                        </View>
                    </Pressable>
                    <Text style={stylesHome.sectionText}>Expense</Text>
                </View>
            </View>
            <Text style={stylesHome.activityText}>Activity</Text>
            <View style={stylesHome.activityContainer}>
                <ActivityItem transactions={transactions}/>
            </View>
                {isModalVisible && (
                    <AddAccountModal onClose={() => setIsModalVisible(false)} onSubmit={handleModalSubmit}/>
                )}
            <Toast/>
        </SafeAreaView>
    )
}


export default HomeScreen;