import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../theme/AppTheme";
import {AccountCard} from "../../components/accounts/Card";
import {AccountInterface} from "../../../domain/entities/Account";

const HomeScreen = () => {
    const cards: AccountInterface[] = [{name:"Cash", balance: 1235, slug: "Cash"}];

    return (
        <SafeAreaView style={stylesHome.mainContainer}>
            <View style={stylesHome.topContainer}>
                <Text style={stylesHome.walletText}>My wallet</Text>
                <Pressable>
                    <Image source={require('../../../../assets/icons/bell_icon.png')}/>
                </Pressable>
            </View>
            <View style={stylesHome.cardsContainer}>
                <AccountCard accounts={cards}/>
            </View>
            <View style={stylesHome.sectionContainer}>
                <View style={stylesHome.eachSection}>
                    <Pressable>
                        <View style={{...stylesHome.sectionBtn, backgroundColor: AppTheme.colors.primary}}>
                            <Image source={require('../../../../assets/icons/income_icon.png')}
                                   style={{zIndex: 999}}/>
                            <View style={{...stylesHome.background, backgroundColor: AppTheme.colors.white, opacity: 0.4}}></View>
                        </View>
                    </Pressable>
                    <Text style={stylesHome.sectionText}>Income</Text>
                </View>

                <View style={stylesHome.eachSection}>
                    <Pressable>
                        <View style={{...stylesHome.sectionBtn, backgroundColor: AppTheme.colors.secondary}}>
                            <Image source={require('../../../../assets/icons/saving_icon.png')}
                                   style={{zIndex: 999}}/>
                            <View style={{...stylesHome.background, backgroundColor: AppTheme.colors.white, opacity: 0.4}}></View>
                        </View>
                    </Pressable>
                    <Text style={stylesHome.sectionText}>Savings</Text>
                </View>

                <View style={stylesHome.eachSection}>
                    <Pressable>
                        <View style={{...stylesHome.sectionBtn, backgroundColor: AppTheme.colors.tertiary}}>
                            <Image source={require('../../../../assets/icons/expense_icon.png')}
                                   style={{zIndex: 999}}/>
                            <View style={{...stylesHome.background, backgroundColor: AppTheme.colors.white, opacity: 0.5}}></View>
                        </View>
                    </Pressable>
                    <Text style={stylesHome.sectionText}>Expense</Text>
                </View>
            </View>
            <Text style={stylesHome.activityText}>Activity</Text>
            <View style={stylesHome.activityContainer}>

            </View>
        </SafeAreaView>
    )
}

const stylesHome = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.colors.background,
        flex: 1,
        padding: 16,
        display: "flex",
        flexDirection: "column",
    },
    topContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        alignItems: "center",
        marginTop: 10
    },
    walletText:{
        fontSize: 24,
        fontFamily: AppTheme.fonts.regular,
        color: AppTheme.colors.black
    },
    cardsContainer:{
        marginTop: 35
    },
    sectionContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 30
    },
    eachSection:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    sectionText:{
        fontSize: 16,
        color: AppTheme.colors.black,
        fontWeight: 500,
        marginTop: 5
    },
    sectionBtn: {
        width: 70,
        height: 70,
        elevation: 5,
        shadowColor: AppTheme.colors.black,
        shadowRadius: 0.8,
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 15,
    },
    activityText:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 20
    },
    activityContainer:{

    },
})

export default HomeScreen;