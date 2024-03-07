import {View} from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import Subtitulos from "../components/Subtitulos";
import Adicional from "../components/ItemAdicional";



function Login(){
    return(
        <View>
            <Header texto="Login" cor="#000000"/>
            <Subtitulos textoS="Faça Login para Acessar o Sistema!"/>
            <Input label="Email:" placeholder="Insira seu email" secureTextEntry={false}/>
            <Input label="Senha:" placeholder="Insira sua senha" secureTextEntry={true}/>
            <Buttons textoB= "Cadastre-se" />
            <Adicional textlink="Cadastre-se                                    Esqueceu a senha?"/>
        </View>
    )
}



export default Login