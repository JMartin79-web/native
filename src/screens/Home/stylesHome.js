import { StyleSheet} from "react-native";
import { color } from "../../themes/colors/themes.colors";

export const styles = StyleSheet.create({
    logo:{
        width: 100,
        height: 50,
        resizeMode: "contain",
        
    },
    home: {
        
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:15
    },
    categoriesContainer:{
        flex: 1,
        backgroundColor: color.darkBlue,
    }
})