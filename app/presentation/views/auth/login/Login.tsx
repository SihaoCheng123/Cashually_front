import {Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {Button, TextInput} from "react-native-paper";
import {useState} from "react";
import loginStyles from "./StylesLogin";
import {PropsStackNavigation} from "../../../interfaces/StackNav";

const LoginScreen = ({navigation}: PropsStackNavigation) => {
    const [text, setText] = useState("");
    return (
        <SafeAreaView style={loginStyles.mainContainer}>

            <View style={loginStyles.logoContainer}>
                <Image source={require('../../../../../assets/logo_img.png')} />
            </View>

            <Text style={loginStyles.logoName}>Cashually</Text>

            <View style={loginStyles.inputContainer}>
                <Text style={loginStyles.inputText}>Email</Text>
                <TextInput mode={"outlined"} style={loginStyles.input}
                           value={text} onChangeText={setText}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>

            <View style={loginStyles.inputContainer}>
                <Text style={loginStyles.inputText}>Password</Text>
                <TextInput mode={"outlined"} style={loginStyles.input}
                           value={text} onChangeText={setText}
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
                >Log in</Button>
            </View>

            <View style={loginStyles.registerContainer}>
                <Text style={loginStyles.haveAccountText}>Don't have an account? </Text>
                <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={loginStyles.loginText}>Sign in</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
};


export default LoginScreen;