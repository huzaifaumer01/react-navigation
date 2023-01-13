import { View,Text,StyleSheet} from "react-native";

const SignUpScreen = ()=> {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
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

export default SignUpScreen;