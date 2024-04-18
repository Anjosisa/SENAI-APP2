import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";





interface BtnProps extends LinkProps  {
    textlink: string
}

function Adicional({textlink, ...props}: BtnProps){
    return(
        <>
            <TouchableOpacity style={styles.links}>
                <Text style={styles.textL}>{textlink}</Text>
            </TouchableOpacity>

        </>

    )
}

const styles = StyleSheet.create({
    links:{
        marginTop:-40,
        padding: 20
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