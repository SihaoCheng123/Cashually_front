import {StyleSheet} from "react-native";
import {AppTheme} from "../../../theme/AppTheme";

const stylesHome = StyleSheet.create({
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
        marginTop: 35,
        paddingHorizontal: 16,
    },
    sectionContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
        width: "90%",
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
        marginTop: 23,
        flex: 1
    },
})

export default stylesHome;