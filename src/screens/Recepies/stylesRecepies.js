import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    container:{
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
        marginBottom:15,
        marginLeft: -5
    },


    // RECETAS
    recepiesContainer:{
        flex:1,
        marginBottom: 60,
    },


    // No encotrado
    viewNotFound:{
        flex: 1,
        width: "100%",
        height: "75%",
        alignSelf: "flex-start",
        justifyContent: "space-between",
        position: "absolute",
        marginTop: 35,
        marginBottom: 75,
    },
    viewNotFoundText: {
        justifyContent: "flex-start",
        color: color.darkPink,
        fontWeight: "bold",
        fontSize:18,
        marginBottom: 15
    },
    viewNotFoundImg: {
        position: "relative",
        alignSelf: "center",
        justifyContent: "center",
        width: "75%",
        height: "75%",
        marginRight: -15
    }

})