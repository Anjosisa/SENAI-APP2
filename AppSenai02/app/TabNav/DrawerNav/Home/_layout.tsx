
import { Stack } from "expo-router"
import { DrawerToggleButton } from "@react-navigation/drawer"


export default function layout(){
    return(
        <Stack>
            <Stack.Screen name="Lista" options={{
                headerLeft: () => (
                <DrawerToggleButton />
                ),
                headerSearchBarOptions:{
                    placeholder: "Pesquisar"
                },
                headerTitleAlign: 'center',
                headerTitle: 'Lista',
                headerTintColor: '#595959'
            
            }}
            
            />
            
        </Stack>
    )
}