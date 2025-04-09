import {Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {ActivityItem} from "../../../components/activity/ActivityItem";
import {FAB} from "react-native-paper";
import {useContext, useEffect, useState} from "react";
import {AddIncomeModal} from "../../../components/modals/AddIncome";
import stylesIncome from "./StylesIncome";
import Toast from "react-native-toast-message";
import IncomeViewModel from "./ViewModel";
import {UserContext} from "../../../context/UserContext";
import {AccountInterface} from "../../../../domain/entities/Account";
import {TransactionInterface} from "../../../../domain/entities/Activity";

const IncomeScreen = ({navigation}: PropsStackNavigation) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {makeIncome, getMonthlyIncome, incomeList, total} = IncomeViewModel()
    const {user} = useContext(UserContext)
    useEffect(() => {
        if (user && user.slug){
            getMonthlyIncome(user.slug)
        }
    },[user.slug])

    const handleModalSubmit = async (modalData:{concept: string, amount: number, date:string, account:AccountInterface}) => {
        if (modalData.account.slug){
            const incomeData: TransactionInterface = {
                ...modalData
            }
            await makeIncome(incomeData, modalData.account.slug)
            await getMonthlyIncome(user.slug)
        }
    }

    const date = new Date();
    const monthName = date.toLocaleString('en-EN', { month: 'long' });
    const monthNameCapitalized = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    return (
        <SafeAreaView style={stylesIncome.mainContainer}>
            <View style={stylesIncome.topContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../../assets/icons/back_icon.png')}
                    style={stylesIncome.backIcon}/>
                </Pressable>
                <Text style={stylesIncome.titleText}>Income</Text>
            </View>
            <Text style={stylesIncome.monthText}>{monthNameCapitalized}</Text>

            <View style={stylesIncome.cardContainer}>
                <View style={stylesIncome.card}>
                    <View style={{...stylesIncome.background, backgroundColor: AppTheme.colors.white, opacity: 0.4}}></View>
                    <View style={stylesIncome.dataContainer}>
                        <Text style={stylesIncome.totalText}>Total income</Text>
                        <Text style={stylesIncome.totalAmount}>+ {total} €</Text>
                    </View>
                    <Image source={require('../../../../../assets/icons/rise_icon.png')} />
                </View>
            </View>
            <Text style={stylesIncome.activityText}>Activity</Text>
            <View style={stylesIncome.activityContainer}>
                <ActivityItem transactions={incomeList}/>
            </View>
        <FAB onPress={() => setIsModalVisible(true)} style={stylesIncome.fab}
             color={AppTheme.colors.primary}
        icon={require('../../../../../assets/icons/plus_icon.png')}/>
            {isModalVisible &&(
                <AddIncomeModal onClose={() => setIsModalVisible(false)} onSubmit={handleModalSubmit}/>
            )}

            <Toast/>
        </SafeAreaView>
    )
}



export default IncomeScreen;