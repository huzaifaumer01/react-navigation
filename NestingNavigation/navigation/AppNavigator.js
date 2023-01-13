import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen"

import AppTabNavigator from "./AppTabNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="Products" component={ProductsScreen}/>
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>

            <Stack.Screen name="Root" component={AppTabNavigator} options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
);
export default AppNavigator;