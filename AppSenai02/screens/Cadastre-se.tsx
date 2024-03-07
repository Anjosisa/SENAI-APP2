import { ScrollView } from "react-native"
import Header from "../components/Header"
import Input from "../components/Input"
import Buttons from "../components/Buttons"


function Cadastro(){
    return(
        <ScrollView>
            <Header texto="Cadastre - se" cor="#FF0000"/>
            <Input label="Nome:" placeholder="Insira seu nome:"/>
            <Input label="Sobrenome:" placeholder="Insira seu sobrenome:"/>
            <Input label="E-mail:" placeholder="Insira seu email:"/>
            <Input label="Telefone:" placeholder="Insira seu telefone:"/>
            <Input label="Senha:" placeholder="Insira sua senha:"/>
            <Input label="Confirmar senha:" placeholder="Insira sua senha:"/>
            <Buttons textoB="Cadastre-se"/>
        </ScrollView>
    )
}
 export default Cadastro