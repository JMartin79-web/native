import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    InputTask: {
        flex: 1,
        borderWidth:2,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:15,
        marginRight: 10,
        fontWeight: "bold",
    },
    InputButton:{
        flex: 1,
        borderRadius:15,
        color: color.white,
        backgroundColor: color.coral,
        justifyContent: 'center',
        alignSelf: "center"
    },

})