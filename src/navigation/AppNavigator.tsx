import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen.tsx";
import HomeScreen from "../screens/HomeScreen.tsx";
import DetailScreen from "../screens/DetailScreen.tsx";

import RootStackParamList from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {

    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />

                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );

}