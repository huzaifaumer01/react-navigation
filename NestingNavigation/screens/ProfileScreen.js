import { View,Text,StyleSheet} from "react-native";

const ProfileScreen = ()=> {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
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