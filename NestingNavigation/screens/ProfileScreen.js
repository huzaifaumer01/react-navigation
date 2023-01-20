import { View,Text,StyleSheet} from "react-native";
import React,{useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "../models/Constants";

const ProfileScreen = ()=> {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
          const valueEmail = await AsyncStorage.getItem(Constants.Kemail)
          if(valueEmail !== null) {
            setEmail(valueEmail);
          }
          const valueName = await AsyncStorage.getItem(Constants.Kname)
          if(valueName !== null) {
            setName(valueName);
          }
          const valuePhone = await AsyncStorage.getItem(Constants.Kphone)
          if(valuePhone !== null) {
            setPhone(valuePhone);
          }
          

        } catch(e) {
          // error reading value
          showAlert("Unkown Error");
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Name: {name}</Text>
            <Text style={styles.title}>Email Address: {email}</Text>
            <Text style={styles.title}>Phone Number: {phone}</Text>
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
        color:'red',
        fontWeight:'600'
    }
})

export default ProfileScreen;