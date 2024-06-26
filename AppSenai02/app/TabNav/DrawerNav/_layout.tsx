import CustomDrawer from '@components/CustomD'
import {Drawer} from 'expo-router/drawer'
import {MaterialIcons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useColor } from '@temas/Temas';


export default function Layout() {

    const cores = useColor()

    return (
        <Drawer screenOptions={{
            drawerInactiveTintColor: cores.textColorPrimary
        }} drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name='Home'
                options={{
                    headerShown: false,
                    drawerIcon: ({size, color}) => (
                        <MaterialIcons name='home' size={size} color={color} />
                    ) 
                }}
            />

            <Drawer.Screen name='Perfil'
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="account" size={24} color='#D9D9D9' />
                    ) 
                }}
            />

            <Drawer.Screen name='Sobre O App'
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="information" size={24} color="#D9D9D9" />
                    ) 
                }}
            />

            <Drawer.Screen name='Suporte'
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Ionicons name="chatbox-ellipses" size={24} color="#D9D9D9" />
                    ) 
                }}
            />

            <Drawer.Screen name='Sair'
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color="#D9D9D9" />
                    ) 
                }}
            />
        </Drawer>
    );
}