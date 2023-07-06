import { StyleSheet} from 'react-native'
import { color } from '../../../styles.variables'

export const styles = StyleSheet.create({
    containerItem:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: color.white,
        borderWidth:3,
        borderColor: color.olivine,
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:15,
        marginBottom: 15,
        
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        color: color.olivine
    },
})