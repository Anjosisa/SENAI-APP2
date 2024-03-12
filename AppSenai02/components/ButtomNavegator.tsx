import { View, Text, StyleSheet  } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


function ButtomNav({icon, icon2, bgcolor, iconcolor, bordercolor}){
    return(
        <View style={{...styles.nav, backgroundColor: bgcolor, borderColor: bordercolor}}>
           <Ionicons name={icon} size={30} color={iconcolor}/>
           <Ionicons name={icon2} size={30} color={iconcolor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        height:80,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderTopWidth:1
    },
})
export default ButtomNav