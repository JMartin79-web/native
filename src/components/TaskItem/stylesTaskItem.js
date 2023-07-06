import { StyleSheet} from 'react-native'
import { color } from '../../../styles.variables'

export const styles = StyleSheet.create({
    containerItem:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: color.darkcian,
        padding: 5,
        
        marginBottom: 5,
        text:{
            fontSize: 15,
            fontWeight: "bold",
            color: color.white
        },
        includeFontPadding:{}
    }
})