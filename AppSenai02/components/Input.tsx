import { ViewProps, TextInput, Text, StyleSheet } from "react-native";

function Input({textoI , placeholder}){
    return(

        <ViewProps>
            <ViewProps style={styles.inputContainer}>
            <Text style={styles.fontE}>{textoI}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
        />
            </ViewProps>
        </ViewProps>
    

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:25,
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