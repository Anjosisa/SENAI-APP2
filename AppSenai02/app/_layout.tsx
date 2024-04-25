import { Stack } from "expo-router";

export default function layout(){

  return(
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
      }}/> 
      <Stack.Screen name='TelasIniciais/RecupSenha' options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "#fff"
      }}/> 

      <Stack.Screen name='TelasIniciais/Cadastro' options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: "#fff"
      }}/>

      <Stack.Screen name="TelasIniciais/AddItems" options={{
        
        headerRight: () => (
          <Ionicons name="add-circle-outline" size={24} color='white' />
        ),
        headerTitle: "Cadastro de itens",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: cores.bgSecundary },
        headerTitleAlign: 'center'
      }}/>

      <Stack.Screen name="TelasIniciais/Descrição" options={{
        
        headerRight: () => (
          <Ionicons name="refresh" size={24} color='white' />
        ),
        headerTitle: "Descrição do item",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: cores.bgSecundary },
        headerTitleAlign: 'center'
      }}/>

      <Stack.Screen name='TabNav' options={{
        headerShown: false
      }}/> 
      
      <Stack.Screen name='/TelasIniciais/Login' options={{
        headerShown: false
      }}/> 

    </Stack>
    
  )
}