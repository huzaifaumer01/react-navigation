import {FlatList,StyleSheet} from "react-native";

import ProductItem from "../components/ProductItem";

const ProductsScreen = ({route,navigation})=> {
    const {selectedProduct} = route.params;
    const renderItem = ({ item }) =>(
        <ProductItem title={item.title} image={item.image} price={item.price}
         onPress={()=> {
             navigation.navigate('ProductDetail',{
                 selectedProduct:item
             })
         }
      }/>);
    return(
        <FlatList
        data={selectedProduct}
        renderItem={renderItem}
        keyExtractor={(item)=> item.title}
        />
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

export default ProductsScreen;