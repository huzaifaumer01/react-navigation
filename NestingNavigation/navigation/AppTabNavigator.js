import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

import TabIcon from "../components/TabIcons";

const Tab = createBottomTabNavigator();

const AppTabNavigator=()=>(
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:()=><TabIcon image={require('../assets/icon_home.png')}/>
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon:()=><TabIcon image={require('../assets/icon_home.png')}/>
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarIcon:()=><TabIcon image={require('../assets/icon_home.png')}/>
        }}/>
    </Tab.Navigator>
);

export default AppTabNavigator;