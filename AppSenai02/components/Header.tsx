import { View, Text, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';

function Header(){
  return (
    <View style={styles.container}>
        <StatusBar style="light"/>
        <Image style={styles.logo} source={require('./assets/image.png')}></Image>
        <Text style={styles.text}>Bem-Vindo(a)</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FF0000',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 42,
    paddingHorizontal: 73,
  },
  logo:{
    width: 200,
    height: 51.27,
    marginBottom: 20,
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
    fontWeight: '400',
    lineHeight: 23.44

  },

})

export default Header