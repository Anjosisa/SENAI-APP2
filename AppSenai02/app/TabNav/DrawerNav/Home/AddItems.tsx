import { ScrollView, StyleSheet,TouchableOpacity, View } from "react-native";
import TopNav from "../../../../components/TopNavigator";
import Input from "../../../../components/Input";
import Patrimonio from "../../../../components/Patrimonio";
import ButtomNav from "../../../../components/ButtomNavegator";
import { AntDesign } from '@expo/vector-icons'
import InputItem from "../../../../components/InputItem";

function AddItems(){
    return(
        <ScrollView>
                <View style={styles.container}>
                    <InputItem label="Nº Inventário" descInicial=""/>
                    <InputItem label="Descrição" descInicial=""/>
                    <InputItem label="Local" descInicial=""/>
                    <InputItem label="Responsável" descInicial=""/>
                    <InputItem label="Data de registro" descInicial=""/>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: 800
    
    }
})

export default AddItems

