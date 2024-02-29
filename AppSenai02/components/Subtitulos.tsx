import { View, Text, StyleSheet } from "react-native";

function Subtitulos({textoS}){
    return(
        <View>
            <Text style={styles.text}>{textoS}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Inter',
        fontSize: 20,
        color: '#000000',
        fontWeight: '500',
        lineHeight: 24.2
    
    },
})

export default Subtitulos