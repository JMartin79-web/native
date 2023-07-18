import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 25
    },
    search:{
        flex:1,
        paddingBottom: -5,
        borderBottomWidth: 5,
        //borderBottomColor: color.darkGrey,
        
        height: 60,
        fontSize: 18,
    },
    btn:{
        //flex:1,
        width:50,
        height: 50,
        borderRadius: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.darkGrey
    },
    btnPressed:{
        //flex:1,
        width:50,
        height: 50,
        borderRadius: 100,
        borderWidth: 5,
        marginLeft: 10,

        borderColor: color.white,

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.pink,
    },

})