import { React, useState} from "react";
import { styles } from "./Styles";

import {SafeAreaView, Text } from "react-native";

import { color } from "./themes/themes";
import { Header } from "./components/components";

import Home from "./screens/Home/home";

export default function App(){
   

return(
<>
    
    <SafeAreaView style={styles.SafeArea}>
    <Header></Header>
      <Home></Home>
      

    </SafeAreaView>
    
</>
    )
}