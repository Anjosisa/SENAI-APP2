import { View } from "react-native";
import Header from "../../components/Header";
import Subtitulos from "../../components/Subtitulos";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons";
import { Link } from "expo-router";
import { useColor } from "@temas/Temas";
import { StyleSheet } from "react-native";

function RecupSenha(){

    const cores = useColor()

    return(
        <View style={styles.container}>
            <Header texto="Recuperação de senha" cor = {cores.recSenhaHeader}/>
            <Subtitulos textoS="Insira seu e-mail para recuperar                         a senha!"/>
            <Input label="Email:" placeholder="Insira seu email:"/>
            <Link href="TelasIniciais/Cadastro" asChild>
                <Buttons title="Cadastre-se"/>
            </Link>
        </View>

    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container:{
        backgroundColor: cores.bgPrimary,
        flex: 1
    }

    })


export default RecupSenha