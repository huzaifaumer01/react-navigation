
import {
     StyleSheet,
     Text,
     TouchableOpacity,
     Alert, 
     View
    } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react'; 
import AppTextInput from '../components/AppTextInput';
import Constants from '../models/Constants';

  const SignUpScreen= ({navigation}) => {
  
   const [name, setName] =useState("");
   const [phone, setPhone] =useState("");
   const [email, setEmail] =useState("");
   const [password, setPassword] = useState("");

   const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      showAlert("Unkown error");
    }
  }

   function doSignUp(){
    if(name.trim() == "") {
      showAlert("Please enter full name");
      return;
    }
    if(phone.trim() == "") {
      showAlert("Please enter phone number");
      return;
    }
    if(email.trim() == "") {
       showAlert("Please enter email");
       return;
    }
    if(password.trim() == ""){
       showAlert("Please enter password");
       return;
    }

    storeData(Constants.Kname,name);
    storeData(Constants.Kphone,phone);
    storeData(Constants.Kemail,email);
    storeData(Constants.Kpassword,password);

    navigation.pop();
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
   
  <AppTextInput value={name} onChangeValue={setName} hint="Enter Name"/>
  <AppTextInput value={phone} onChangeValue={setPhone} hint="Enter Phone number"/>
  <AppTextInput value={email} onChangeValue={setEmail} hint="Enter Email" keyboard={'email-address'} />
  <AppTextInput value={password} onChangeValue={setPassword} hint="Enter Password" secureTextEntry={true}/>
  <TouchableOpacity style={styles.Button}
            onPress={()=> doSignUp()}>
              <Text style={styles.title}>Signup</Text>
           </TouchableOpacity>
  </View>
  
   );
  }
  
  const styles=StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
     padding:20,
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
   title:{
    color:'white',
    fontWeight:'600'
    },
  });
  
  export default SignUpScreen;