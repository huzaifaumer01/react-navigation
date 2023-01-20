import React, { useState,useEffect } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

const ProductItem = ({title,image,price,onPress}) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image source={image} style={styles.imageStyle}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.title,{color:'red'}]}>Price: Rs {price}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight:'600',
      color:'black',
      textAlign:'center',
      padding:8
    },
    item: {
      backgroundColor: "#CDF1FD",
      padding: 20,
      margin:12,
      borderRadius: 8,
      justifyContent:'center',
      alignItems:'center'
    },
    imageStyle:{
      height:120,
      width:120,
    }
  });

  export default ProductItem;