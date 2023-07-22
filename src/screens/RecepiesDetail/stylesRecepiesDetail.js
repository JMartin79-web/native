import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: color.darkBlue,
        marginBottom: 60,
    },

    recepybtnBack:{
        width: 150,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    recepybtnBackText:{
        color: color.darkGrey,
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 600,
    },
    recepyImageContainer:{
        maxHeight: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.darkPink,
        borderRadius: 10,
        marginVertical: 15,
    },
    recepyImage:{
        flex:1,
        maxHeight: "40%",
        position: "absolute",
        zIndex: 2
    },
    recepyImageIcon:{
        position: "absolute",
        zIndex: 1
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:15,
        marginLeft: -5
    },

    recepiesDetailContainer:{
        flex:1,
        marginBottom: 60,
        backgroundColor: color.green
    },

})