import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {Button, TextInput} from "react-native-paper";
import {useState} from "react";
import registerStyles from "../register/StylesRegister";

const LoginScreen = ({}) => {
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
                <Pressable>
                    <Text style={loginStyles.loginText}>Sign in</Text>
                </Pressable>
            </View>
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
    logoContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45
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
export default LoginScreen;