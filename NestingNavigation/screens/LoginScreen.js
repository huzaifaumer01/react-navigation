import { useState } from "react";
import { View,Text,StyleSheet, TextInput,TouchableOpacity} from "react-native";

const LoginScreen = ({navigation})=> {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const goToHome=()=>{
        navigation.navigate('Root')
      }
    return(
        <View style={styles.container}>
            <TextInput style={styles.inputEmail}
            keyboardType={email}
            value={email}
            onChangeText={setEmail}
            placeholder='Enter your Email'
      />

    <TextInput style={styles.inputEmail}
            value={password}
            onChangeText={setPassword}
            placeholder='Enter your Password'
            secureTextEntry={true}
      />
      
    <TouchableOpacity style={styles.Button} onPress={goToHome}>
      <Text style={styles.title}
      
      >Login</Text>
            
    </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
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
})

export default LoginScreen;