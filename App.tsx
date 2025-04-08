import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import {AppTheme} from "./app/presentation/theme/AppTheme";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {PaperProvider} from "react-native-paper";
import RegisterScreen from "./app/presentation/views/auth/register/Register";
import LoginScreen from "./app/presentation/views/auth/login/Login";

const Stack= createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    RegisterScreen: undefined,
    LoginScreen: undefined
}

export default function App() {

    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    })
    if (!fontsLoaded) {
        return <ActivityIndicator  size={30} color={AppTheme.colors.primary} />;
    }else {
        return (
            <SafeAreaProvider>
                <PaperProvider>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
                            <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaperProvider>
            </SafeAreaProvider>
        );
    }
}
