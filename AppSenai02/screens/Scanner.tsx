import { View } from "react-native"
import TopNav from "../components/TopNavigator"
import ButtomNav from "../components/ButtomNavegator"

function Scanner(){
    return(
        <View>
            <TopNav icon="arrow-back" icon2="refresh-outline" text="Scanner" bgcolor="#FF0000" iconcolor="#fff" fontcolor="#fff"/>
            
            <ButtomNav icon="camera-reverse" icon2="menu" iconcolor="#595959" bgcolor="#fff" bordercolor="CBCBCB"/>
        </View>
    )
}

export default Scanner