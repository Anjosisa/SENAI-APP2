import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function Adicional({textlink}){
    return(
        <View>
        <TouchableOpacity style={styles.links}>
            <Text style={styles.textL}>{textlink}</Text>
        </TouchableOpacity>
      </View>

    )
}

const styles = StyleSheet.create({
    links:{
        width: 318,
        height: 17,
        left: 20,
        justifyContent: 'space-between',
        marginTop:-14
    },

    textL:{
        fontFamily:'Inter',
        fontWeight:'400',
        fontSize:14,
        lineHeight:19.94,
        color:'#011E83'
    }
})

export default Adicional