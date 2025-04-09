import {StyleSheet} from "react-native";
import {AppTheme} from "../../../theme/AppTheme";

const loginStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.colors.background,
        flex: 1,
        padding: 16,
        display: "flex",
        flexDirection: "column",
    },
    logoContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35
    },
    logoName:{
        fontSize: 65,
        textAlign: "center",
        fontFamily: AppTheme.fonts.logo,
        color: AppTheme.colors.black,
        marginVertical: 10

    },
    inputContainer:{
        marginBottom: 21,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 33
    },
    inputText:{
        fontFamily: AppTheme.fonts.regular,
        fontSize: 16,
        paddingLeft: 10,
        paddingBottom: 5
    },
    input:{

    },
    forgotText:{
        textAlign: "right",
        fontFamily: AppTheme.fonts.regular,
        fontSize: 16,
        color: AppTheme.colors.grey,
        marginTop: 9
    },
    buttonContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        width: "50%",
        marginTop: 40,
        borderRadius: 15,
        height: 53,
    },
    registerContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 46
    },
    haveAccountText:{
        fontSize: 16,
        fontFamily: AppTheme.fonts.regular,
        color: AppTheme.colors.grey
    },
    loginText:{
        color: AppTheme.colors.black,
        textDecorationLine: "underline",
        fontSize: 16,
        fontFamily: AppTheme.fonts.regular,
    },

})

export default loginStyles;