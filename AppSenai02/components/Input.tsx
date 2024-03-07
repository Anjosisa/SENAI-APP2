import {View, TextInput, Text, StyleSheet } from "react-native";

function Input({textoI , placeholder}){
    return(
        <View>
            <View style={styles.inputContainer}>
            <Text style={styles.fontE}>{textoI}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
        />
            </View>
        </View>
    

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:55,
        width: 320,
        height: 74,
        left: 23,
    },
    
    fontE:{
        fontSize:16
    },

    input: {
        height: 40,
        backgroundColor:'#F5F5F5',
        borderRadius: 5,
        padding: 10,
        marginTop:10,
    },


})

export default Input