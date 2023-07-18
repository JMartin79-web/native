import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    category:{
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: color.darkBlue,
        minHeight:100,
        borderRadius: 10,
        marginVertical: 5,
        position: "relative",
    },
    title:{
        zIndex: 3,
        color: color.white,
        fontSize: 15,
        padding: 15,
        fontWeight: "700",
        position: "absolute"
    },
    imgContainer:{
        zIndex: 2,
        backgroundColor: color.pink,
        height: "100%",
        width: "100%",
        borderRadius: 10,
        position: "relative",

    },
    img:{
        flex:1,
        overflow:"hidden",
        borderRadius: 10,
    },
})