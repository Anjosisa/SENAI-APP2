import { View } from "react-native";
import RecupSenha from "./screens/RecupSenha";
import Cadastro from "./screens/Cadastre-se";
import Login from "./screens/Login";
import Lista from "./screens/Lista";

function App(){
    return(
        <View>
            {/* <RecupSenha/>
            <Login/>
            <Cadastro/> */}
            <Lista/>
        </View>
    )
}

export default App