import { View, Text, StyleSheet } from "react-native";

type PatrimonioProps = {
    id: number,
    categoria: string
}

function Patrimonio({id, categoria}: PatrimonioProps){
    return(
        <View style={styles.patrimonio}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.categoria}>{categoria}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    id:{
        fontSize: 16,
        fontWeight: '600'
    },
    categoria:{
        fontSize: 14,
        color: '#595959'
    },
    patrimonio:{
        borderColor: 'F5F5F5',
        borderTopWidth: 1,
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: 66
    }
})

export default Patrimonio




// import { View, Text, StyleSheet } from "react-native";

// function ListItens({numeração, descrição}){
//     return(
//         <View style={styles.container}>
//             <Text style={styles.textID}>{numeração}</Text>
//             <Text style={styles.desc}>{descrição}</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     container:{
//         height:78,
//         width:"100%",
//         gap:10,
//         top:10,
//         borderTopWidth:1,
//         borderColor:"#F5F5F5"
//     },

//     textID:{
//         width:62,
//         height:19,
//         fontFamily:'Inter',
//         fontWeight:'600',
//         fontSize:16,
//         lineHeight:19.36,
//         marginLeft:20,
//         marginTop: 13,
//     },

//     desc:{
//         width:110,
//         height:17,
//         fontFamily:'Inter',
//         fontWeight:'400',
//         fontSize:14,
//         lineHeight:16.94,
//         marginLeft:20

//     }

// })

// export default ListItens