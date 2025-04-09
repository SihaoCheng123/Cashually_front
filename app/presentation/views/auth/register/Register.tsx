import {Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {Button, TextInput} from "react-native-paper";
import registerStyles from "./StylesRegister";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import Toast from "react-native-toast-message";
import RegisterViewModel from "./ViewModel";

const RegisterScreen = ({navigation}: PropsStackNavigation) => {

    const {onChangeRegister, register, age, password, confirmPassword, phone, email, name, success} = RegisterViewModel()
    const handleRegister = async () => {
        await register()
        if (success){
            setTimeout(() => {
                navigation.navigate("LoginScreen");
            }, 1000);
        }
    }

    return (
        <SafeAreaView style={registerStyles.mainContainer}>

            <Text style={registerStyles.createAccountText}>Create an account</Text>

            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Name</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           onChangeText={(text) => onChangeRegister("name", text)}
                           keyboardType={"default"}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Email</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           onChangeText={(text) => onChangeRegister("email", text)}
                           keyboardType={"email-address"}
                           theme={{roundness:15, colors:{
                               primary: AppTheme.colors.grey,
                               background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Password</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           onChangeText={(text) => onChangeRegister("password", text)}
                           keyboardType={"default"}
                           secureTextEntry={true}
                           right={<TextInput.Icon icon="eye" />}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Confirm password</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           onChangeText={(text) => onChangeRegister("confirmPassword", text)}
                           secureTextEntry={true}
                           keyboardType={"default"}
                           right={<TextInput.Icon icon="eye" />}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.ageAndPhoneContainer}>
                <View style={registerStyles.ageContainer}>
                    <Text style={registerStyles.inputText}>Age</Text>
                    <TextInput mode={"outlined"} style={registerStyles.input}
                               onChangeText={(text) => onChangeRegister("age", text)}
                               keyboardType={"numeric"}
                               theme={{roundness:15, colors:{
                                       primary: AppTheme.colors.grey,
                                       background: AppTheme.colors.white}}}/>
                </View>
                <View style={registerStyles.phoneContainer}>
                    <Text style={registerStyles.inputText}>Phone</Text>
                    <TextInput mode={"outlined"} style={registerStyles.input}
                               onChangeText={(text) => onChangeRegister("phone", text)}
                               keyboardType={"default"}
                               theme={{roundness:15, colors:{
                                       primary: AppTheme.colors.grey,
                                       background: AppTheme.colors.white}}}/>
                </View>
            </View>
            <View style={registerStyles.buttonContainer}>
                <Button mode={"contained"}
                        buttonColor={AppTheme.colors.black}
                        textColor={AppTheme.colors.background}
                        labelStyle={{fontFamily: AppTheme.fonts.regular, fontSize:20, lineHeight: 30}}
                        style={registerStyles.button}
                        onPress={() => {handleRegister()}}>Register</Button>
            </View>
            <View style={registerStyles.loginContainer}>
                <Text style={registerStyles.haveAccountText}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={registerStyles.loginText}>Log in</Text>
                </Pressable>
            </View>

            <Toast/>
        </SafeAreaView>
    )
}


export default RegisterScreen;

