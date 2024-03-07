import { View, Text, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';

function Header({cor, texto}){
  return (
    <View style={{...styles.container,backgroundColor: cor}}>
        <StatusBar style="light"/>
        <Image style={styles.logo} source={require('../assets/image.png')} />
        <Text style={styles.text}>{texto}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    height:250,
  
  },
  logo:{
    width: 181,
    height: 39,
    marginBottom: 20,
    marginTop: 40
  },
  text:{
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: 24.2

  },

})

export default Header