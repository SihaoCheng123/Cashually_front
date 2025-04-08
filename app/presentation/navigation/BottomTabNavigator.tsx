import {createMaterialBottomTabNavigator,} from "react-native-paper/react-navigation";
import React from "react"
import GraphScreen from "../views/main/graph/Graph";
import HomeScreen from "../views/main/home/Home";
import UserScreen from "../views/main/user/User";
import {Image, StyleSheet, View} from "react-native";
import {AppTheme} from "../theme/AppTheme";
import { Provider as PaperProvider } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator()

function TabNavigator() {
    return (
        <PaperProvider settings={{
            rippleEffectEnabled: false,
        }}>
            <Tab.Navigator
                theme={AppTheme}
                initialRouteName="Home"
                sceneAnimationEnabled={false}
                rippleColor={AppTheme.colors.grey}
                pressColor={AppTheme.colors.white}
                activeColor={ AppTheme.colors.primary}
                inactiveColor={AppTheme.colors.background}
                barStyle={{ backgroundColor: 'rgba(0,0,0,0.85)',
                    height: 70,
                    marginBottom: 24,
                    marginHorizontal: 20,
                    borderRadius: 25,
                    overflow: 'hidden',}}
                screenOptions={{headerShown: false,
                    tabBarPressColor: 'transparent',
                    tabBarRipple: false,
                    tabBarRippleColor: 'transparent',
                    tabBarActiveTintColor: AppTheme.colors.primary,
                    tabBarInactiveTintColor: AppTheme.colors.background,}}
                tabBarOptions={{
                    showLabel: false,
                    style: {
                            elevation: 0,
                            shadowOpacity: 0,
                        }}}
            >

                <Tab.Screen
                    name="Graph"
                    options={{
                        tabBarLabel: false,
                        tabBarPressColor: 'transparent',

                        tabBarIcon: ({ color } : {color:string}) => (
                            <View style={{alignItems:"center", justifyContent:"center", top:5}}>
                                <Image
                                    source={require('../../../assets/icons/graph_icon.png')}
                                    style={[styles.icon, { tintColor: color }]}
                                />
                            </View>
                        ),

                    }}
                    component={GraphScreen}
                />
                <Tab.Screen
                    name="Home"
                    options={{
                        tabBarLabel: false,
                        tabBarPressColor: 'transparent',
                        tabBarIcon: ({ color } : {color:string}) => (
                            <View style={{alignItems:"center", justifyContent:"center", top:5}}>
                            <Image
                                source={require('../../../assets/icons/home_icon.png')}
                                style={[styles.icon, { tintColor: color }]}
                            />
                            </View>
                        ),
                    }}
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="User"
                    options={{
                        tabBarLabel: false,
                        tabBarPressColor: 'transparent',
                        tabBarIcon: ({ color } : {color:string}) => (
                            <View style={{alignItems:"center", justifyContent:"center", top:5}}>
                                <Image
                                    source={require('../../../assets/icons/user_icon.png')}
                                    style={[styles.userIcon, { tintColor: color }]}
                                />
                            </View>
                        ),
                    }}
                    component={UserScreen}
                />
            </Tab.Navigator>
        </PaperProvider>

);
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 0,
    },
    userIcon:{
        width: 27,
        height: 27,
        resizeMode: 'contain',
        marginBottom: 0,
    },
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 20,
        marginHorizontal: 10,
        overflow: 'hidden',
    }
});


export default TabNavigator;