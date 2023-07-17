import { React, useState} from "react";
import { styles } from "./Styles";

import {SafeAreaView, Text } from "react-native";

import { color } from "./themes/themes";
import { Header } from "./components/components";


export default function App(){
   

    return(
<>
    <SafeAreaView style={styles.SafeArea}>
      <Header></Header>
      
      

    </SafeAreaView>
    
</>
    )
}