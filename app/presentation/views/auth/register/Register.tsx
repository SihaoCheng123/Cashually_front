import {Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {AppTheme} from "../../../theme/AppTheme";
import {Button, Menu, TextInput} from "react-native-paper";
import {useState} from "react";
import registerStyles from "./StylesRegister";


const RegisterScreen = () => {
    const [visible, setVisible] = useState(false);
    const [selectedAge, setSelectedAge] = useState('18');
    const [anchor, setAnchor] = useState(null);

    const showMenu = (event: any) => {
        setAnchor(event.nativeEvent.target);
        setVisible(true);
    };
    const hideMenu = () => setVisible(false);

    const selectAge = (age: string) => {
        setSelectedAge(age);
        hideMenu();
    };
    const [text, setText] = useState("");

    return (
        <SafeAreaView style={registerStyles.mainContainer}>

            <Text style={registerStyles.createAccountText}>Create an account</Text>

            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Name</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           value={text} onChangeText={setText}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Email</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           value={text} onChangeText={setText}
                           theme={{roundness:15, colors:{
                               primary: AppTheme.colors.grey,
                               background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Password</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           value={text} onChangeText={setText}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.inputContainer}>
                <Text style={registerStyles.inputText}>Confirm password</Text>
                <TextInput mode={"outlined"} style={registerStyles.input}
                           value={text} onChangeText={setText}
                           theme={{roundness:15, colors:{
                                   primary: AppTheme.colors.grey,
                                   background: AppTheme.colors.white}}}/>
            </View>
            <View style={registerStyles.ageAndPhoneContainer}>
                <View style={registerStyles.ageContainer}>
                    <Text style={registerStyles.inputText}>Age</Text>
                    <TextInput mode={"outlined"} style={registerStyles.input}
                               value={selectedAge} onPress={showMenu}
                               theme={{roundness:15, colors:{
                                       primary: AppTheme.colors.grey,
                                       background: AppTheme.colors.white}}}/>
                </View>
                <View style={registerStyles.phoneContainer}>
                    <Text style={registerStyles.inputText}>Phone</Text>
                    <TextInput mode={"outlined"} style={registerStyles.input}
                               value={text} onChangeText={setText}
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
                >Register</Button>
            </View>
            <View style={registerStyles.loginContainer}>
                <Text style={registerStyles.haveAccountText}>Already have an account? </Text>
                <Pressable>
                    <Text style={registerStyles.loginText}>Log in</Text>
                </Pressable>
            </View>
            <Menu
                visible={visible}
                onDismiss={hideMenu}
                anchor={anchor}>
                {[...Array(100).keys()].map((age) => (
                    <Menu.Item
                        key={age}
                        onPress={() => selectAge((age + 1).toString())}
                        title={(age + 1).toString()}
                    />
                ))}
            </Menu>
        </SafeAreaView>
    )
}


export default RegisterScreen;

