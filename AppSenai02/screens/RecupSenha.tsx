import { View } from "react-native";
import Email from "../components/Email";
import BotãoC from "../components/Cadastre-se";
import Header from "../components/Header";
import Subtitulos from "../components/subtitulos";

function RecupSenha(){
    return(
        <View>
            <Header texto="Recuperação de senha" cor = '#011E83'/>
            <Subtitulos textoS="Insira seu e-mail para recuperar a senha!"/>
            <Email/>
            <BotãoC/>
        </View>
    )
}

export default RecupSenha