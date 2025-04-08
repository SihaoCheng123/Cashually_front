import {StyleSheet} from "react-native";
import {AppTheme} from "../../../theme/AppTheme";

const registerStyles = StyleSheet.create({
    mainContainer:{
        backgroundColor: AppTheme.colors.background,
        flex: 1,
        padding: 16,
        display: "flex",
        flexDirection: "column",
    },
    createAccountText:{
        fontSize: 36,
        fontFamily: AppTheme.fonts.bold,
        marginBottom: 30,
        textAlign: "center",
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
    ageAndPhoneContainer:{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        marginHorizontal: 33
    },
    ageContainer:{
        width: "30%"
    },
    phoneContainer:{
        width: "55%"
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
    loginContainer:{
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

export default registerStyles;