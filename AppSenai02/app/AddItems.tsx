import { ScrollView, StyleSheet,TouchableOpacity, View } from "react-native";
import TopNav from "../components/TopNavigator";
import Input from "../components/Input";
import Patrimonio from "../components/Patrimonio";
import ButtomNav from "../components/ButtomNavegator";
import { AntDesign } from '@expo/vector-icons'
import InputItem from "../components/InputItem";

function AddItems(){
    return(
        <ScrollView>
            <TopNav icon="arrow-back" icon2="add-circle-outline" text='Cadastro de Itens' bgcolor="#FF0000" fontcolor="#FFFFFF" iconcolor="#FFFFFF"/>
                <View style={styles.container}>
                    <InputItem label="Nº Inventário" placeholder=""/>
                    <InputItem label="Descrição" placeholder=""/>
                    <InputItem label="Local" placeholder=""/>
                    <InputItem label="Responsável" placeholder=""/>
                    <InputItem label="Data de registro" placeholder=""/>
                </View>
                <ButtomNav icon="camera-reverse" icon2="menu" iconcolor="#595959" bgcolor="#FFFFFF" bordercolor="#CBCBCB"/>
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

