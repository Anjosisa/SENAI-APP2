import { View, StyleSheet, ScrollView, Image } from "react-native"
import TopNavigator from "@components/TopNavigator"
import ButtomNav from"@components/ButtomNavegator"

function Scanner(){
    return( 
        <ScrollView>
            <TopNavigator icon="arrow-back" icon2="refresh-outline" text="Scanner" bgcolor="#ff0000" fontcolor="#fff" iconcolor="#fff"/>
                <View style={styles.container}>
                    <Image style={{width: 350, height: 350}} source={require('@assets/Scanner.png')}/>
                </View>
                <ButtomNav icon="camera-reverse" icon2="menu" iconcolor="#595959" bgcolor="#fff" bordercolor="CBCBCB"/>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: 800,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Scanner