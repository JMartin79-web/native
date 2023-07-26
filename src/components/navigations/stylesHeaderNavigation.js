import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";
export const styles = StyleSheet.create({
    container:{
        zIndex: 10,
        height: 60,
        flex: 1,
        backgroundColor: color.darkGrey,
        position: "absolute",
        width: "100%",
        bottom: 0,
        right: 0,
        left: 0,
    },
    label:{
        fontSize: 14,
        marginBottom: 10,
        fontWeight: "bold",
        color: color.green
    }
  
})