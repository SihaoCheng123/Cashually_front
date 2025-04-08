import {StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";

const LoginScreen = ({}) => {

    return (
        <SafeAreaView style={loginStyles.mainContainer}>

        </SafeAreaView>
    )
};

const loginStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.colors.background,
        flex: 1,
        padding: 16,
        display: "flex",
        flexDirection: "column",
    },
})
export default LoginScreen;