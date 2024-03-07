import { ScrollView } from "react-native";
import TopNav from "../components/TopNavigator";
import Patrimonio from "../components/Patrimonio";

function Lista(){
    return(
        <ScrollView>
            <TopNav icon="menu" icon2="search" text='Lista' bgcolor="#fff" fontcolor="#595959" iconcolor="#666"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            <Patrimonio id={956389} categoria="CADEIRA SENAI"/>
            
        </ScrollView>
    )
}

export default Lista