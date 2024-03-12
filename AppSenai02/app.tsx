import { View } from "react-native";
import RecupSenha from "./screens/RecupSenha";
import Cadastro from "./screens/Cadastre-se";
import Login from "./screens/Login";
import Lista from "./screens/Lista";
import AddItems from "./screens/AddItems";
import Descrição from "./screens/Descrição";
import Scanner from "./screens/Scanner";

function App(){
    return(
        <View>
            {/* <RecupSenha/>
            <Login/>
            <Cadastro/>
            <Lista/> */}
            {/* <AddItems/> */}
            {/* <Descrição/> */}
            <Scanner/>
        </View>
    )
}

export default App