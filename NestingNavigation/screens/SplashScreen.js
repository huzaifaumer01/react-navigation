import { View,Text,StyleSheet} from "react-native";
import React,{useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "../models/Constants";
import User from "../models/User";

const SplashScreen = ({navigation})=> {


    useEffect(()=>{
        getRoot();
    })

    async function getRoot() {
        try{
            const jsonValue = await AsyncStorage.getItem(Constants.KisLoggedIn)
            console.log('Logged value',jsonValue);
            if(jsonValue != null){
                User.instance.isUserLogin = jsonValue === Constants.Ktrue ? true:false;
                console.log('setting root');
                if(jsonValue){
                    setHomeRoot();
                } else {
                    setLoginRoot();
                }
            } else {
                User.instance.isUserLogin = false;
                setLoginRoot();
            }
        } catch(e) {}  
    }
    const setLoginRoot=()=>{
        console.log('setting root login');
        navigation.replace('Login')
    }
    const setHomeRoot=()=>{
        console.log('setting root home');
        navigation.replace('Root')
    }
    return(
            <View style={styles.container}>
            <Text style={styles.title}>Nesting Navigation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'black',
        fontWeight:'600'
    }
})

export default SplashScreen;