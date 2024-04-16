import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>{textoB}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({


    button: {
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

    textButton: {
        fontSize: 20,
        color: '#fff',
        fontFamily:'Inter',
        fontWeight:'400',

    },

})

export default Buttons
