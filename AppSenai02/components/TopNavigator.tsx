import { View, Text, StyleSheet  } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


function TopNav({icon, icon2, text, bgcolor, fontcolor, iconcolor}){
    return(
        <View style={{...styles.nav, backgroundColor: bgcolor}}>
           <Ionicons name={icon} size={30} color={iconcolor}/>
           <Text style={{color: fontcolor}}>{text}</Text>
           <Ionicons name={icon2} size={30} color={iconcolor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop:3
    },
})
export default TopNav