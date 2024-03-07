import { ScrollView } from "react-native"
import Header from "../components/Header"
import Input from "../components/Input"
import Buttons from "../components/Buttons"


function Cadastro(){
    return(
        <ScrollView>
            <Header texto="Cadastre - se" cor="#FF0000"/>
            <Input textoI="Nome:" placeholder="Insira seu nome:"/>
            <Input textoI="Sobrenome:" placeholder="Insira seu sobrenome:"/>
            <Input textoI="E-mail:" placeholder="Insira seu email:"/>
            <Input textoI="Telefone:" placeholder="Insira seu telefone:"/>
            <Input textoI="Senha:" placeholder="Insira sua senha:"/>
            <Input textoI="Confirmar senha:" placeholder="Insira sua senha:"/>
            <Buttons textoB="Cadastre-se"/>
        </ScrollView>
    )
}
 export default Cadastro