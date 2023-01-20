
// import React, {useState} from 'react';
// import {
//   Button,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const SettingScreen = () => {
//   const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
//   const justifyContents = [
//     'flex-start',
//     'flex-end',
//     'center',
//     'space-between',
//     'space-around',
//     'space-evenly',
//   ];
//   const alignItemsArr = [
//     'flex-start',
//     'flex-end',
//     'center',
//     'stretch',
//     'baseline',
//   ];
//   const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
//   const directions = ['inherit', 'ltr', 'rtl'];
//   const [flexDirection, setFlexDirection] = useState(0);
//   const [justifyContent, setJustifyContent] = useState(0);
//   const [alignItems, setAlignItems] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [wrap, setWrap] = useState(0);

//   const hookedStyles = {
//     flexDirection: flexDirections[flexDirection],
//     justifyContent: justifyContents[justifyContent],
//     alignItems: alignItemsArr[alignItems],
//     direction: directions[direction],
//     flexWrap: wraps[wrap],
//   };

//   const changeSetting = (value, options, setterFunction) => {
//     if (value === options.length - 1) {
//       setterFunction(0);
//       return;
//     }
//     setterFunction(value + 1);
//   };
//   const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);
//   return (
//     <>
//       <View style={{paddingTop: StatusBar.currentHeight}} />
//       <View style={[styles.container, styles.playingSpace, hookedStyles]}>
//         {squares.map(elem => elem)}
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.controlSpace}>
//           <View style={styles.buttonView}>
//             <Button
//               title="Change Flex Direction"
//               onPress={() =>
//                 changeSetting(flexDirection, flexDirections, setFlexDirection)
//               }
//             />
//             <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
//           </View>
//           <View style={styles.buttonView}>
//             <Button
//               title="Change Justify Content"
//               onPress={() =>
//                 changeSetting(
//                   justifyContent,
//                   justifyContents,
//                   setJustifyContent,
//                 )
//               }
//             />
//             <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
//           </View>
//           <View style={styles.buttonView}>
//             <Button
//               title="Change Align Items"
//               onPress={() =>
//                 changeSetting(alignItems, alignItemsArr, setAlignItems)
//               }
//             />
//             <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
//           </View>
//           <View style={styles.buttonView}>
//             <Button
//               title="Change Direction"
//               onPress={() => changeSetting(direction, directions, setDirection)}
//             />
//             <Text style={styles.text}>{directions[direction]}</Text>
//           </View>
//           <View style={styles.buttonView}>
//             <Button
//               title="Change Flex Wrap"
//               onPress={() => changeSetting(wrap, wraps, setWrap)}
//             />
//             <Text style={styles.text}>{wraps[wrap]}</Text>
//           </View>
//           <View style={styles.buttonView}>
//             <Button
//               title="Add Square"
//               onPress={() => setSquares([...squares, <Square />])}
//             />
//           </View>
//           <View style={styles.buttonView}>
//             <Button
//               title="Delete Square"
//               onPress={() =>
//                 setSquares(squares.filter((v, i) => i !== squares.length - 1))
//               }
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '50%',
//   },
//   playingSpace: {
//     backgroundColor: 'white',
//     borderColor: 'blue',
//     borderWidth: 3,
//   },
//   controlSpace: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     backgroundColor: '#F5F5F5',
//   },
//   buttonView: {
//     width: '50%',
//     padding: 10,
//   },
//   text: {textAlign: 'center'},
// });

// const Square = () => (
//   <View
//     style={{
//       width: 50,
//       height: 50,
//       backgroundColor: randomHexColor(),
//     }}
//   />
// );

// const randomHexColor = () => {
//   return '#000000'.replace(/0/g, () => {
//     return Math.round(Math.random() * 16).toString(16);
//   });
// };

// export default SettingScreen;









import { View,Text,StyleSheet, Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "../models/Constants";
import User from "../models/User";


const SettingsScreen = ({navigation})=> {

    const doLogout = async ()=>{
        await AsyncStorage.removeItem(Constants.KisLoggedIn)
        User.instance.isUserLogin = false;
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login'}],
        });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <Button title="Log Out" onPress={()=>{doLogout();}}/>
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