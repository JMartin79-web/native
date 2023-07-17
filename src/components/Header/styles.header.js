import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    container:{
        zIndex: 10,
        width: "100%",
        height: 100,
        
        position: "absolute",
        bottom: 0,
    },
    headerBackground:{
        zIndex: 11,
        height: 70,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: color.darkGrey,
    },
    header:{
        zIndex:12,
        height: 70,
        width: "100%",
        paddingHorizontal: 15,
        
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        
    }
})