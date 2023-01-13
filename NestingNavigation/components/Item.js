import React, { useState,useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const Item = ({title,onPress}) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight:'600',
      color:'black',
      textAlign:'center'
    },
    item: {
      backgroundColor: "#CDF1FD",
      padding: 20,
      margin:12,
      borderRadius: 8,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    imageStyle:{
      height:50,
      width:50,
    }
  });

  export default Item;