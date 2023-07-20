import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    recepies:{
        flex:1
    },
    btnBack:{
        width: 200,
        height: 50,
        flexDirection: "row",
        alignItems: "center"
    },
    btnBackText:{
        color: color.darkGrey,
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 600
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:15
    }
})