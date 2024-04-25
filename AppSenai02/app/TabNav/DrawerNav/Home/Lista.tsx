import { ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import Patrimonio from "../../../../components/Patrimonio";
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons'


function Lista(){
    return(
        <ScrollView>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id2={956389} categoria="CADEIRA SENAI"/>

            <Link href="TabNav/DrawerNav/Home/AddItems" asChild>
                <TouchableOpacity style={styles.buttomplus}>
                    <AntDesign name="pluscircle" size={50} color="#FF0000" />
                </TouchableOpacity>
            </Link>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttomplus:{
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 130,
        right: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

export default Lista