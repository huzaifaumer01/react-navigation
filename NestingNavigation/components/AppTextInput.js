import {
     StyleSheet,
     TextInput,} from 'react-native';

const AppTextInput = ({value,onChangeValue,hint,keyboard,secureTextEntry})=>(
    <TextInput style={styles.InputFieldsStyle}
    onChangeText={onChangeValue}
    value={value} 
    placeholder={hint}
    keyboardType={keyboard}
    secureTextEntry={secureTextEntry}
    /> 
  )

  const styles=StyleSheet.create({
    InputFieldsStyle:{
        height: 50,
        margin: 12,
        padding:12,
        borderWidth: 1,
        borderRadius:12,
        color:'black',
        backgroundColor:'white',
        lineHeight:13
      },
  })
  export default AppTextInput;