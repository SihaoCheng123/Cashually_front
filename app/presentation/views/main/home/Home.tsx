import {Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {AccountCard} from "../../../components/accounts/Card";
import {AccountInterface} from "../../../../domain/entities/Account";
import {ActivityItem} from "../../../components/activity/ActivityItem";
import {TransactionInterface} from "../../../../domain/entities/Activity";
import {useState} from "react";
import {AddAccountModal} from "../../../components/modals/AddAccount";
import stylesHome from "./StylesHome";
import {PropsStackNavigation} from "../../../interfaces/StackNav";

const HomeScreen = ({navigation}:PropsStackNavigation) => {
    const cards: AccountInterface[] = [{name:"Cash", balance: 1235, slug: "Cash"}];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => {
        setIsModalVisible(true);
    };
    const transactions: TransactionInterface[] = [
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {category: "food", amount: 25, date: "2025-04-07T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {category: "food", amount: 25, date: "2025-04-07T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {category: "food", amount: 25, date: "2025-04-07T00:00:00+02:00"},
        {concept: "Salary", amount: 1200, date: "2025-04-06T00:00:00+02:00"},
        {category: "food", amount: 25, date: "2025-04-07T00:00:00+02:00"},
    ]
    return (
        <SafeAreaView style={stylesHome.mainContainer}>

            <View style={stylesHome.topContainer}>
                <Text style={stylesHome.walletText}>My wallet</Text>
                <Pressable>
                    <Image source={require('../../../../../assets/icons/bell_icon.png')}/>
                </Pressable>
            </View>
            <View style={stylesHome.cardsContainer}>
                <AccountCard accounts={cards} openModal={openModal}/>
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
                    <AddAccountModal onClose={() => setIsModalVisible(false)}/>
                )}

        </SafeAreaView>
    )
}


export default HomeScreen;