import {FlatList} from "react-native";

import Products from "../models/Products";
import Item from '../components/Item';

const HomeScreen = ({navigation})=> {
    const renderItem = ({ item }) =>(
        <Item title={item.title}
         onPress={()=> {
             navigation.navigate('Products',{
                 selectedProduct:item.data
             })
         }
      }/>);
    return(
        <FlatList
        data={Products}
        renderItem={renderItem}
        keyExtractor={(item)=> item.title}
        />
    )
}

export default HomeScreen;