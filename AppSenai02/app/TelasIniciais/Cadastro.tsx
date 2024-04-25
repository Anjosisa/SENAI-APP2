import { ScrollView } from "react-native"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Buttons from "../../components/Buttons"
import { Link } from "expo-router";
import { useColor } from "@temas/Temas";
import { StyleSheet } from "react-native";


function Cadastro(){

    const cores = useColor()

    return(
        <ScrollView style={styles.container}>
            <Header texto="Cadastre - se" cor={cores.cadastroHeader}/>
            <Input label="Nome:" placeholder="Insira seu nome:"/>
            <Input label="Sobrenome:" placeholder="Insira seu sobrenome:"/>
            <Input label="E-mail:" placeholder="Insira seu email:"/>
            <Input label="Telefone:" placeholder="Insira seu telefone:"/>
            <Input label="Senha:" placeholder="Insira sua senha:"/>
            <Input label="Confirmar senha:" placeholder="Insira sua senha:"/>
            <Link href="TelasIniciais/Login" asChild>
                <Buttons title="Cadastre-se"/>
            </Link>
        </ScrollView>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container:{
        backgroundColor: cores.bgPrimary,
        flex: 1
    }

    })

 export default Cadastro