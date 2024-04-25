import { ScrollView, StyleSheet,TouchableOpacity, View } from "react-native";
import InputItem from "../../../../components/InputItem";
import { useColor } from "../../../../Temas/Temas";


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
const cores = useColor()
const styles = StyleSheet.create({
    container:{
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: 800,
        backgroundColor: cores.bgPrimary
    
    }
})

export default AddItems

