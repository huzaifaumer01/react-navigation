import { View,Text,Image,StyleSheet} from "react-native";

const ProductDetailScreen = ({route,navigation})=> {
    const {selectedProduct} = route.params;
    return(
        <View style={styles.container}>
            <Image source={selectedProduct.image} style={styles.imageStyle}/>
            <Text style={styles.title}>{selectedProduct.title}</Text>
            <Text style={[styles.title,{padding:1,color:'blue'}]}>Rs {selectedProduct.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        margin:20
        // justifyContent:'center'
    },
    title:{
        color:'red',
        fontSize:24,
        fontWeight:'600',
        padding:20
    },
    imageStyle:{
        height:300,
        width:300
    }
})

export default ProductDetailScreen;