import { View } from "react-native";
import RecupSenha from "./screens/RecupSenha";
import Cadastro from "./screens/Cadastre-se";
import Login from "./screens/Login";

function App(){
    return(
        <View>
            {/* <RecupSenha/>
            <Login/> */}
            <Cadastro/>
        </View>
    )
}

export default App