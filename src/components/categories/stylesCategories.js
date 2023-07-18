import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    category:{
        alignItems: "flex-start",
        justifyContent: "center",
        height: 85,
        borderRadius: 10,
        marginVertical: 5,
        position: "relative",
    },
    categoryPressed: {
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 10,
        opacity: .8
    },
    
    title:{
        zIndex: 3,
        color: color.white,
        fontSize: 18,
        padding: 15,
        fontWeight: "700",
        alignSelf: "flex-start",
        justifyContent: 'center',
        position: "absolute"
    },
    imgContainer:{
        zIndex: 2,
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
    arrow:{
        height:"100%",
        zIndex: 4,
        alignSelf: "flex-end",
        justifyContent: 'center',
        padding: 15,
    },
})