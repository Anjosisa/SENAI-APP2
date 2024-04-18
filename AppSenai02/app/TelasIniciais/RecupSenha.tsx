import { View } from "react-native";
import Header from "../../components/Header";
import Subtitulos from "../../components/Subtitulos";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons";
import { Link } from "expo-router";

function RecupSenha(){
    return(
        <View>
            <Header texto="Recuperação de senha" cor = '#011E83'/>
            <Subtitulos textoS="Insira seu e-mail para recuperar                         a senha!"/>
            <Input label="Email:" placeholder="Insira seu email:"/>
            <Link href="TelasIniciais/Cadastro" asChild>
                <Buttons title="Cadastre-se"/>
            </Link>
        </View>

    )
}

export default RecupSenha