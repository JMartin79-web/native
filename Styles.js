import { StyleSheet, StatusBar } from "react-native";
import { color } from "./styles.variables";
export const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
    },
    Text:{
        color : color.black,
    },
    Container:{
        flex: 1,
        backgroundColor: color.white,
        padding: 10,
        paddingTop: StatusBar.currentHeight + 15,
    },
    flatListContainer:{
        flex:1,
        padding:10,
    },

    modalContainer:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: color.white
    },
    modalTitle:{
        fontSize: 20,
        fontWeight: "bold",
        
    },

    modalViewText:{
        padding: 10,

    },
    modalText:{},

    modalViewButtons:{
        padding: 10,
        flexDirection: "row",
        gap: 5,
    },
    modalButton:{}
})