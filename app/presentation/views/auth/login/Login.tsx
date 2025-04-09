import {Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {Button, TextInput} from "react-native-paper";
import loginStyles from "./StylesLogin";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import LoginViewModel from "./ViewModel";
import {useContext, useEffect} from "react";
import {UserContext} from "../../../context/UserContext";
import Toast from "react-native-toast-message";

const LoginScreen = ({navigation}: PropsStackNavigation) => {
    const {email, password, onChangeLogin, login} = LoginViewModel()
    const {user} = useContext(UserContext)
    const handleLogin = async () => {
        const response = await login()
        if (response?.data.data) {
                setTimeout(() => {
                    navigation.replace("TabNavigator");
                }, 1000);
        }
    }

    useEffect(() => {
        if (user && user?.tokens){
            navigation.replace("TabNavigator");
        }
    }, [user]);

    return (
        <SafeAreaView style={loginStyles.mainContainer}>

            <View style={loginStyles.logoContainer}>
                <Image source={require('../../../../../assets/logo_img.png')} />
            </View>

            <Text style={loginStyles.logoName}>Cashually</Text>

            <View style={loginStyles.inputContainer}>
                <Text style={loginStyles.inputText}>Email</Text>
                <TextInput mode={"outlined"} style={loginStyles.input}
                           onChangeText={(text) => onChangeLogin("email", text)}
                           keyboardType={"email-address"}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>

            <View style={loginStyles.inputContainer}>
                <Text style={loginStyles.inputText}>Password</Text>
                <TextInput mode={"outlined"} style={loginStyles.input}
                           onChangeText={(text) => onChangeLogin("password", text)}
                           keyboardType={"default"}
                           secureTextEntry={true}
                           right={<TextInput.Icon icon="eye" />}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
                <Text style={loginStyles.forgotText}>Forgot your password?</Text>
            </View>


            <View style={loginStyles.buttonContainer}>
                <Button mode={"contained"}
                        buttonColor={AppTheme.colors.black}
                        textColor={AppTheme.colors.background}
                        labelStyle={{fontFamily: AppTheme.fonts.regular, fontSize:20, lineHeight: 30}}
                        style={loginStyles.button}
                        onPress={handleLogin}
                >Log in</Button>
            </View>

            <View style={loginStyles.registerContainer}>
                <Text style={loginStyles.haveAccountText}>Don't have an account? </Text>
                <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={loginStyles.loginText}>Sign in</Text>
                </Pressable>
            </View>
        <Toast/>
        </SafeAreaView>
    )
};


export default LoginScreen;