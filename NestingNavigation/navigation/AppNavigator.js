import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen"

import AppTabNavigator from "./AppTabNavigator";

import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{
                headerShown:false
            }}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="Products" component={ProductsScreen}/>
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/>
          
            <Stack.Screen name="Root" component={AppTabNavigator} options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
)
};
export default AppNavigator;