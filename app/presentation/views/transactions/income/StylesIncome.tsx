import {Dimensions, StyleSheet} from "react-native";
import {AppTheme} from "../../../theme/AppTheme";

const stylesIncome = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.colors.background,
        flex: 1,
        paddingVertical: 16,
        display: "flex",
        flexDirection: "column",
    },
    topContainer:{
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 30,
        alignContent: "center",
        marginTop: 10
    },
    backIcon:{
        width: 40,
        height: 40,
    },
    titleText:{
        fontSize: 24,
        fontFamily: AppTheme.fonts.regular,
        color: AppTheme.colors.black,
        marginLeft: 32,
        paddingTop: 5
    },
    monthText:{
        fontSize: 32,
        fontWeight: 500,
        color: AppTheme.colors.black,
        marginLeft: 32,
        marginVertical: 30
    },
    cardContainer:{
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: AppTheme.colors.primary,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        height: 156,
        width: Dimensions.get("window").width - 50,
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "center",
        elevation: 5,
    },
    dataContainer:{
        display: "flex",
        flexDirection: "column",
    },
    totalText:{
        color: AppTheme.colors.black,
        fontSize: 24,
        marginBottom: 21
    },
    totalAmount:{
        color: AppTheme.colors.black,
        fontSize: 40,
        fontWeight: "bold",
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
        marginTop: 40,
        marginLeft: 20
    },
    activityContainer:{
        marginTop: 23,
        flex: 1
    },
    fab:{
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: AppTheme.colors.black,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default stylesIncome;