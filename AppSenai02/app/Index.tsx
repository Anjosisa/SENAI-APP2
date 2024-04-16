import {View, TouchableOpacity} from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import Subtitulos from "../components/Subtitulos";
import Adicional from "../components/ItemAdicional";
import { Link } from "expo-router";



function Login(){
    return(
        <View>
            <Header texto="Login" cor="#000000"/>
            <Subtitulos textoS="Faça Login para Acessar o Sistema!"/>
            <Input label="Email:" placeholder="Insira seu email" secureTextEntry={false}/>
            <Input label="Senha:" placeholder="Insira sua senha" secureTextEntry={true}/>
            <Buttons textoB= "Cadastre-se" />
            
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                
                <Link href="/Cadastre-se" asChild>
                    <TouchableOpacity>
                        <Adicional textlink="Cadastre-se"/>
                    </TouchableOpacity>
                </Link>

                <Link href="/RecupSenha" asChild>
                    <TouchableOpacity>
                        <Adicional textlink="Esqueceu a senha?"/>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}