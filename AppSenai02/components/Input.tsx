import {View, TextInput, Text, StyleSheet, TextInputProps } from "react-native"
import { useState } from "react";

interface InputProps extends TextInputProps{
    label:string
}

function Input({label, ...props}: InputProps){
    const[hover, setHover] = useState("#F5F5F5")

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
            marginTop:15,
            marginBottom:30,
            borderWidth:1,
            borderColor: hover
        },
    
    
    })

    return(
        <View>
            <View style={styles.inputContainer}>
            <Text style={styles.fontE}>{label}</Text>
        <TextInput {...props}
            style={styles.input} onFocus={()=>{
                setHover("#F39200")
            }} onBlur={()=>{
                setHover("#F5F5F5")
            }}
        />
            </View>
        </View>
    

    )
}

export default Input