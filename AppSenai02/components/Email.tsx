import { View, TextInput, Text, StyleSheet } from "react-native";

function Email(){
    return(

        <View>
            <View style={styles.inputContainer}>
            <Text style={styles.fontE}>E-mail:</Text>
        <TextInput
            style={styles.input}
            placeholder="Insira seu email:"
            placeholderTextColor='#000000'
        />
            </View>
        </View>
    

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
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
        marginTop:10

    },


})

export default Email