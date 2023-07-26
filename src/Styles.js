import { StyleSheet, StatusBar } from "react-native";
import { color } from "./themes/colors/themes.colors";
export const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight + 15,
        paddingHorizontal: 15,
    },

})