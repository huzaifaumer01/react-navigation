import {Image,StyleSheet} from 'react-native';

const TabIcon=({image})=>{
    return (
        <Image
          style={styles.iconStyle}
          source={image}/>
      );
}
const styles=StyleSheet.create({
    iconStyle:{
        width: 24,
        height: 24
    }
})
export default TabIcon;