import {Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {ActivityItem} from "../../../components/activity/ActivityItem";
import {TransactionInterface} from "../../../../domain/entities/Activity";
import {FAB} from "react-native-paper";
import {useState} from "react";
import {AddIncomeModal} from "../../../components/modals/AddIncome";
import stylesIncome from "./StylesIncome";

const IncomeScreen = ({navigation}: PropsStackNavigation) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const transactions: TransactionInterface[] = [
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
    ]

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
                        <Text style={stylesIncome.totalAmount}>+ 500 €</Text>
                    </View>
                    <Image source={require('../../../../../assets/icons/rise_icon.png')} />
                </View>
            </View>
            <Text style={stylesIncome.activityText}>Activity</Text>
            <View style={stylesIncome.activityContainer}>
                <ActivityItem transactions={transactions}/>
            </View>
        <FAB onPress={() => setIsModalVisible(true)} style={stylesIncome.fab}
             color={AppTheme.colors.primary}
        icon={require('../../../../../assets/icons/plus_icon.png')}/>
            {isModalVisible &&(
                <AddIncomeModal onClose={() => setIsModalVisible(false)}/>
            )}
        </SafeAreaView>
    )
}



export default IncomeScreen;