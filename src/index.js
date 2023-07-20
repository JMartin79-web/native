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
  const [selectedCategoryName, setSelectedCategoryName] = useState(null)
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  //
  const onHandleSelectCategory = ({categoryId}) => {
    setSelectedCategory(categoryId);
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleSelectCategoryName = ({categoryName}) => {
    console.log(categoryName);
    setSelectedCategoryName(categoryName)
  }

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };
return(
<>
    
    <SafeAreaView style={styles.SafeArea}>
    <Header></Header>
      {isCategorySelected ? (
            <Recepies
            onPress={onHandleNavigate}
            categoryId={selectedCategory}
            categoryName={selectedCategoryName} />
          ) : (
            <Home
            onSelectedCategory={onHandleSelectCategory}
            onSelectedCategoryName={onHandleSelectCategoryName} />
          )
      }

      

    </SafeAreaView>
    
</>
    )
}