import { StyleSheet } from "react-native";
import { color } from "../../themes/colors/themes.colors";


export const styles = StyleSheet.create({
    recepyCard:{
        flex:1,
        flexDirection: "row",
        height: 100,
        borderRadius: 10,
        borderColor: color.darkGrey,
        backgroundColor: color.white,
        borderWidth: 3,
        marginVertical: 5,
    },
    recepyCardPressed:{
        flex:1,
        flexDirection: "row",
        height: 100,
        borderRadius: 0,
        borderColor: color.mediumPink,
        borderWidth: 3,
        marginVertical: 5,
        opacity: .8,
    },

    imgContainer:{
        backgroundColor: color.darkGrey,
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    img:{},

    textContainer:{
        flex: 2,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    title:{
        fontSize: 16,
        fontWeight: 600,
        color: color.black,
    },
    description:{
        fontSize: 14,
        color: color.black,
    },
    tagsList:{
        flex: 2,
        flexDirection: "row",
        backgroundColor: color.darkBlue,
    },
    tags: {
        flex: 1,
        backgroundColor: color.pink,
        fontSize: 10,
    }
})