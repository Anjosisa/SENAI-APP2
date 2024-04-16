import { Link } from "expo-router"
import { LinkProps } from "expo-router/build/link/Link"
import { Text,TouchableOpacity,StyleSheet,} from "react-native"


interface LinkBtnProps extends LinkProps{
    title: string
}

export default function LinkBtn({title, ...props}: LinkBtnProps){

    const styles = StyleSheet.create({
        button: {
            backgroundColor: '#000',
            width: 320,
            height: 40,
            left:20,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom:30
        },

        title: {
            color: "#FFFFFF",
            textAlign: 'center',
            fontSize: 16
        }
    })

    return(

        <Link {...props} asChild>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}