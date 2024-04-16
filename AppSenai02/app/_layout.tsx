import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack screenOptions={{
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitle:"",
        statusBarStyle:'light',
        statusBarColor:''
    }}>
    
        <Stack.Screen name="Index" options={{
            statusBarColor:"#000000"
        }}/>

        <Stack.Screen name="Cadastro" options={{
            statusBarColor:"#FF0000"
        }}/>

        <Stack.Screen name="RecupSenha" options={{
            statusBarColor:"#011E83"
        }}/>

    </Stack>
  )
}

