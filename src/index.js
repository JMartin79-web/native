import { React, useState} from "react";
import { styles } from "./Styles";

import {SafeAreaView, Text } from "react-native";

import { color } from "./themes/themes";
import { Header } from "./components/components";

// Paginas
import Home from "./screens/Home/home";
import Recepies from "./screens/Recepies/recepies";

export default function App(){
   
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  //
  const onHandleSelectCategory = (categoryId) => {
    setSelectedCategory(true);
    console.warn(selectedCategory);
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };
return(
<>
    
    <SafeAreaView style={styles.SafeArea}>
    <Header></Header>
      {isCategorySelected ? (
            <Recepies onHandleGoBack={onHandleNavigate} />
          ) : (
            <Home onPress={onHandleSelectCategory} />
          )
      }

      

    </SafeAreaView>
    
</>
    )
}