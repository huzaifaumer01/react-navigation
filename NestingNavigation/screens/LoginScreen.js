import { useState } from "react";
import { View,Text,StyleSheet, Alert,TouchableOpacity} from "react-native";
import AppTextInput from '../components/AppTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "../models/Constants";
import User from "../models/User";

const LoginScreen = ({navigation})=> {
    const [email,setEmail] = useState('huzaifa@gmail.com');
    const [password,setPassword] = useState('12345');

    const validateData = async () => {
        try {
          const valueEmail = await AsyncStorage.getItem(Constants.Kemail)
          if(valueEmail !== null) {
            // value previously stored
            if(email != valueEmail){
                showAlert("Please enter correct email address");
                return;
            }
          }
          const valuePassword = await AsyncStorage.getItem(Constants.Kpassword)
          if(valuePassword != null) {
            // value previously stored
            if(password != valuePassword){
                showAlert("Please enter correct password");
                return;
            }
          }
          await AsyncStorage.setItem(Constants.KisLoggedIn, Constants.Ktrue)
          User.instance.isUserLogin = true;
          navigation.navigate('Root')
        } catch(e) {
          // error reading value
          showAlert("Unkown Error");
        }
    }

    const goToHome=()=>{
        if(email.trim() == "") {
            showAlert("Please enter email");
            return;
         }
         if(password.trim() == ""){
            showAlert("Please enter password");
            return;
         }
         validateData();
    }
    const showAlert=(message) => {
        Alert.alert(
          "Error",
          message ,
          [
            {
              text:"ok",
             }
          ]
        );
    }
    return(
        <View style={styles.container}>
        <AppTextInput value={email} onChangeValue={setEmail} hint="Enter Email" keyboard={'email-address'}/>
        <AppTextInput value={password} onChangeValue={setPassword} hint="Enter Password" secureTextEntry={true}/>
      
    <TouchableOpacity style={styles.Button} onPress={goToHome}>
      <Text style={styles.title}
      
      >Login</Text>
            
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>
            navigation.navigate('SignUp')}>
            <Text style={styles.textSignup}>Don't have an account! Signup</Text>
    </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        color:'white',
        fontWeight:'600'
    },
    inputEmail:{
        height: 50,
        margin: 12,
        padding:12,
        borderWidth: 1,
        borderRadius:12,
        color:'black',
        backgroundColor:'white',
        lineHeight:13
      },
      Button:{
        paddingLeft:40,
        paddingRight:40,
        height:40,
        backgroundColor:'black',
        color:'white',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        margin:12
       },
       textSignup:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:17,
        fontWeight:'600',
        color:'black',
        marginTop:200,
    
      },
})

export default LoginScreen;