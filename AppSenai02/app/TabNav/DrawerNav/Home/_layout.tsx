import React from "react";
import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useColor } from "../../../../Temas/Temas";
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    const cores = useColor();
    
    return (
        <Stack>
            <Stack.Screen name="Lista" 
                options={{
                    headerLeft: () => <DrawerToggleButton tintColor={cores.headerTintColor} />,
                    headerSearchBarOptions: { placeholder: "Pesquisar"},
                    headerTitleAlign: 'center',
                    headerTitle: 'Lista',
                    headerTintColor: cores.headerTintColor,
                    headerStyle: { backgroundColor: cores.bgPrimary }
                }}
            />
            <Stack.Screen name="AddItems" 
                options={{
                    headerRight: () => <Ionicons name="add-circle-outline" size={24} color='white' />,
                    headerTitle: "Cadastro de itens",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen name="Descrição" 
                options={{
                    headerRight: () => <Ionicons name="refresh" size={24} color={'white'} />,
                    headerTitle: "Descrição do item",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen name='Editar' 
                options={{
                    headerRight: () => <Ionicons name="checkmark-circle" size={24} color="white" />,
                    headerTitle: "Editar",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}/>

            <Stack.Screen name='Descricao' 
                options={{
                    headerRight: () => <Ionicons name="checkmark-circle" size={24} color="white" />,
                    headerTitle: "Descrição",
                    headerTintColor: "#fff",
                    headerStyle: { backgroundColor: cores.bgSecundary },
                    headerTitleAlign: 'center'
                }}
            />
        </Stack>
    );
}