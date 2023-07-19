import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    btnHeader:{
        zIndex:15,
        
        height:60,
        width: 60,
        marginHorizontal:10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    btnHeaderFocus:{
        zIndex:15,
        height:60,
        width: 60,
        borderRadius: 100,
        marginTop: -30,
        borderWidth: 5,
        borderColor: color.white,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.green,
        
    },
})