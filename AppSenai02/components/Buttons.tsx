import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";

interface BotaoProps extends TouchableOpacityProps {
    title: string;
  }

function Buttons({title, ...props}:BotaoProps){
    return(
        <View>
            <TouchableOpacity {...props} style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        width: 320,
        height: 40,
        left:20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom:30
    },
    title:{
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 16
    },
})

export default Buttons


