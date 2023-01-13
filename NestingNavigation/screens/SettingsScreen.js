import { View,Text,StyleSheet, Button} from "react-native";

const SettingsScreen = ({navigation})=> {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <Button title="Log Out" onPress={()=>navigation.popToTop()}/>
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

export default SettingsScreen;