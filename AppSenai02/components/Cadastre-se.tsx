import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function BotãoC(){
    return(

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({


    button: {
        backgroundColor: '#000',
        width: 320,
        height: 47,
        left:20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },

    textButton: {
        fontSize: 20,
        color: '#fff',
        fontFamily:'Inter',
        fontWeight:'400',

    },

    

})

export default BotãoC
