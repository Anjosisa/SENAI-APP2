import { View } from "react-native";
import Header from "../components/Header";
import Subtitulos from "../components/Subtitulos";
import Input from "../components/Input";
import Buttons from "../components/Buttons";

function RecupSenha(){
    return(
        <View>
            <Header texto="Recuperação de senha" cor = '#011E83'/>
            <Subtitulos textoS="Insira seu e-mail para recuperar                         a senha!"/>
            <Input textoI="Email:" placeholder="Insira seu email:"/>
            <Buttons textoB="Cadastre-se" cor='#101010'/>
        </View>
    )
}

export default RecupSenha