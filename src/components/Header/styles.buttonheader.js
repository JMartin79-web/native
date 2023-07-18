import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    btnHeader:{
        zIndex:15,
        
        height:65,
        width: 65,
        marginHorizontal:15,
        borderRadius: 10,
        
        alignItems: "center",
        justifyContent: "center",

    },
    btnHeaderFocus:{
        zIndex:15,
        height:75,
        width: 75,
        borderRadius: 100,
        marginTop: -30,
        borderWidth: 5,
        borderColor: color.white,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.pink,
        
    },
})