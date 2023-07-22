import { StyleSheet } from "react-native";
import { color } from "../../themes/colors/themes.colors";
import { FONTS } from "../../themes/fonts/themes.fonts";

export const styles = StyleSheet.create({

    loaderContainer:{
        flex: 1,
        backgroundColor: color.peach,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 20,
        
    }
})