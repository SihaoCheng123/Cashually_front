import { Image, Pressable, Text, View} from "react-native";
import {AppTheme} from "../../../theme/AppTheme";
import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityItem} from "../../../components/activity/ActivityItem";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {TransactionInterface} from "../../../../domain/entities/Activity";
import {FAB} from "react-native-paper";
import {useContext, useEffect, useState} from "react";
import {AddExpenseModal} from "../../../components/modals/AddExpense";
import stylesExpense from "./StylesExpense";
import {UserContext} from "../../../context/UserContext";
import ExpenseViewModel from "./ViewModel";
import {AccountInterface} from "../../../../domain/entities/Account";

const ExpenseScreen = ({navigation}: PropsStackNavigation) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {makeExpense, getMonthlyExpense, expenseList, total} = ExpenseViewModel()
    const {user} = useContext(UserContext)

    useEffect(() => {
        if (user && user.slug){
            getMonthlyExpense(user.slug)
        }
    },[user.slug])

    const handleModalSubmit = async (modalData:{
        category:string,
        amount:number,
        date: string,
        account: AccountInterface,
        description: string}) => {
        if (modalData.account.slug){
            const expenseData: TransactionInterface = {
                ...modalData
            }
            await makeExpense(expenseData, modalData.account.slug)
            await getMonthlyExpense(user.slug)
        }
    }

    const date = new Date();
    const monthName = date.toLocaleString('en-EN', { month: 'long' });
    const monthNameCapitalized = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    return (
        <SafeAreaView style={stylesExpense.mainContainer}>
            <View style={stylesExpense.topContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../../assets/icons/back_icon.png')}
                           style={stylesExpense.backIcon}/>
                </Pressable>
                <Text style={stylesExpense.titleText}>Expense</Text>
            </View>
            <Text style={stylesExpense.monthText}>{monthNameCapitalized}</Text>

            <View style={stylesExpense.cardContainer}>
                <View style={stylesExpense.card}>
                    <View style={{...stylesExpense.background, backgroundColor: AppTheme.colors.white, opacity: 0.4}}></View>
                    <View style={stylesExpense.dataContainer}>
                        <Text style={stylesExpense.totalText}>Total expenses</Text>
                        <Text style={stylesExpense.totalAmount}>- {total} €</Text>
                    </View>
                    <Image source={require('../../../../../assets/icons/fall_icon.png')} />
                </View>
            </View>
            <Text style={stylesExpense.activityText}>Activity</Text>
            <View style={stylesExpense.activityContainer}>
                <ActivityItem transactions={expenseList}/>
            </View>
            <FAB onPress={() => {setIsModalVisible(true)}} style={stylesExpense.fab}
                 color={AppTheme.colors.tertiary}
                 icon={require('../../../../../assets/icons/plus_icon.png')}/>
            {isModalVisible &&(
                <AddExpenseModal onClose={() => setIsModalVisible(false)} onSubmit={handleModalSubmit}/>
            )}
        </SafeAreaView>
    )
}


export default ExpenseScreen;